// Public Supabase config for Citelines.
//
// The anon key is meant to be public — it's safe to expose in client-side
// code and to commit to the repo. Access control comes from Row Level
// Security policies (see sql/schema.sql) and from disabling public signups
// in Supabase Auth settings, not from keeping this key secret.
//
// Fill these in from your Supabase project: Settings → API.
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
