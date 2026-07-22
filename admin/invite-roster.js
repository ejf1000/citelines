#!/usr/bin/env node
// Invites every email in a roster CSV to sign in to Citelines.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=service-role-secret \
//   node invite-roster.js roster.csv
//
// The CSV is one email per line (an optional "email" header is fine).
// Safe to re-run: Supabase no-ops an invite for an email that's
// already an active user, and this script also upserts into the
// `roster` table for record-keeping (not used for access control
// itself — access control comes from disabling public signups in
// Auth settings, so only invited users can ever redeem a magic link).

const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const csvPath = process.argv[2];

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars first.');
  process.exit(1);
}
if (!csvPath) {
  console.error('Usage: node invite-roster.js <roster.csv>');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function readEmails(path) {
  const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);
  return lines
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .filter(l => l.toLowerCase() !== 'email') // skip an optional header row
    .map(l => l.toLowerCase());
}

async function main() {
  const emails = readEmails(csvPath);
  console.log(`Found ${emails.length} email(s) in ${csvPath}.\n`);

  let invited = 0, alreadyExists = 0, failed = 0;

  for (const email of emails) {
    const { error: inviteError } = await supabase.auth.admin.inviteUserByEmail(email);
    if (inviteError) {
      if (/already been registered|already exists/i.test(inviteError.message)) {
        alreadyExists++;
        console.log(`= ${email} (already has an account)`);
      } else {
        failed++;
        console.error(`x ${email} — ${inviteError.message}`);
      }
    } else {
      invited++;
      console.log(`+ ${email} (invite sent)`);
    }

    const { error: rosterError } = await supabase
      .from('roster')
      .upsert({ email }, { onConflict: 'email' });
    if (rosterError) {
      console.error(`  (roster table upsert failed for ${email}: ${rosterError.message})`);
    }
  }

  console.log(`\nDone. ${invited} invited, ${alreadyExists} already had accounts, ${failed} failed.`);
}

main();
