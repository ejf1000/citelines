// Shared auth for Citelines — magic-link sign-in via Supabase, plus
// helpers quiz pages use to record and read back attempt history.
// Requires config.js (SUPABASE_URL/SUPABASE_ANON_KEY) and the Supabase
// UMD client to be loaded first.

// If the Supabase CDN script didn't load (blocked network, offline, CDN
// hiccup), degrade gracefully instead of throwing and breaking every other
// script on the page — the site should keep working fully logged-out.
const sbClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

if (!sbClient) {
  console.warn('Citelines: Supabase client script failed to load — sign-in and progress tracking are unavailable this visit.');
}

// ----- Login modal (injected once, shared by every page) -----

function ensureLoginModal() {
  if (document.getElementById('login-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'login-modal';
  modal.className = 'auth-modal hidden';
  modal.innerHTML = `
    <div class="auth-modal__backdrop" onclick="closeLoginPrompt()"></div>
    <div class="auth-modal__panel">
      <button type="button" class="auth-modal__close" onclick="closeLoginPrompt()" aria-label="Close">&times;</button>
      <h3>Log in to Citelines</h3>
      <p class="muted small" style="margin:0;">Enter your school email and we'll send you a sign-in link — no password needed.</p>
      <form onsubmit="handleLoginSubmit(event)">
        <input type="email" id="login-email" placeholder="you@unc.edu" required/>
        <button type="submit" class="btn btn--primary btn--sm">Send link</button>
      </form>
      <p id="login-status" class="muted small"></p>
    </div>
  `;
  document.body.appendChild(modal);
}

function openLoginPrompt() {
  ensureLoginModal();
  document.getElementById('login-status').textContent = '';
  document.getElementById('login-modal').classList.remove('hidden');
  document.getElementById('login-email').focus();
}

function closeLoginPrompt() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.add('hidden');
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const statusEl = document.getElementById('login-status');
  if (!sbClient) {
    statusEl.textContent = "Sign-in isn't available right now — try reloading the page.";
    return;
  }
  statusEl.textContent = 'Sending link…';
  const { error } = await sbClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.href },
  });
  statusEl.textContent = error ? error.message : `Check ${email} for a sign-in link.`;
}

async function signOut() {
  if (!sbClient) return;
  await sbClient.auth.signOut();
  window.location.reload();
}

// ----- Nav status -----

function renderAuthUI(session) {
  const slot = document.getElementById('auth-slot');
  if (!slot) return;
  if (session && session.user) {
    slot.innerHTML = `
      <span class="nav__user">${session.user.email}</span>
      <button type="button" class="nav__logout-btn" onclick="signOut()">Log out</button>
    `;
  } else {
    slot.innerHTML = `<button type="button" class="nav__login-btn" onclick="openLoginPrompt()">Log in</button>`;
  }
  document.dispatchEvent(new CustomEvent('citelines:auth', { detail: { session } }));
}

if (sbClient) {
  sbClient.auth.onAuthStateChange((_event, session) => {
    renderAuthUI(session);
  });
  sbClient.auth.getSession().then(({ data }) => renderAuthUI(data.session));
} else {
  // Still render the nav (as signed-out) so the page looks right even
  // when the auth backend is unavailable.
  renderAuthUI(null);
}

// ----- Quiz attempt helpers (used by quiz-*.html) -----

// Records a completed attempt for the signed-in student. No-ops silently
// if nobody is signed in, or if the auth backend didn't load — quizzes
// always work fully logged-out, they just don't save.
async function recordQuizAttempt(quizId, score, total) {
  if (!sbClient) return;
  const { data } = await sbClient.auth.getSession();
  const user = data.session && data.session.user;
  if (!user) return;
  await sbClient.from('quiz_attempts').insert({
    user_id: user.id,
    quiz_id: quizId,
    score,
    total,
  });
}

// Returns { [quizId]: { score, total, completed_at } } for the signed-in
// student's most recent attempt at each quiz, or {} if signed out or the
// auth backend didn't load.
async function getQuizAttempts() {
  if (!sbClient) return {};
  const { data } = await sbClient.auth.getSession();
  const user = data.session && data.session.user;
  if (!user) return {};
  const { data: rows, error } = await sbClient
    .from('quiz_attempts')
    .select('quiz_id, score, total, completed_at')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false });
  if (error || !rows) return {};
  const latest = {};
  for (const row of rows) {
    if (!latest[row.quiz_id]) latest[row.quiz_id] = row;
  }
  return latest;
}
