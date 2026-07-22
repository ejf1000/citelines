# Roster management

Scripts course staff run locally each semester to control who can sign in
to Citelines. None of this runs on the deployed site — it talks to
Supabase directly using the **service-role key**, which must never be
committed, pasted into a page, or shared. Treat it like a root password.

## One-time Supabase setup

1. Run `../sql/schema.sql` in the Supabase SQL Editor (creates the
   `profiles`, `roster`, and `quiz_attempts` tables).
2. In **Authentication → Providers → Email**, turn **off** "Allow new
   users to sign up". This is what makes the roster an actual
   allow-list — after this, the only way a student gets an account is
   being invited below, so a random visitor can never sign themselves up.
3. In **Authentication → Providers → Email**, confirm Magic Link is
   enabled.

## Each semester: inviting the roster

1. `npm install` in this directory.
2. Export a CSV of enrolled student emails (one per line, header
   optional) — see `roster.example.csv` for the format. **Do not commit
   the real roster file** — it's student PII. `roster.csv` is
   git-ignored for this reason; keep using that filename.
3. Get your **service-role key** from Supabase → Settings → API (the
   secret one, not the anon key).
4. Run:
   ```
   SUPABASE_URL=https://your-project.supabase.co \
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret \
   node invite-roster.js roster.csv
   ```
5. Each invited student gets an email with a sign-in link. Signing in
   for the first time activates their account; after that they use the
   normal magic-link sign-in from the site.

Re-running the script with an updated CSV is safe — it skips students
who already have accounts and only invites new additions.

## Removing a student (e.g. they drop the course)

Supabase dashboard → Authentication → Users → find the student → delete.
This cascades to their `profiles` and `quiz_attempts` rows automatically.
