-- Citelines: student accounts & quiz progress
-- Run this once in the Supabase project's SQL editor (Dashboard → SQL Editor → New query).
-- Safe to re-run: each statement guards against already existing.

-- ---------------------------------------------------------------
-- profiles: one row per signed-in student, auto-created on signup
-- ---------------------------------------------------------------
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  name text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles: read own" on public.profiles;
create policy "profiles: read own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create a profile row whenever a new auth user is created
-- (i.e. the first time an invited/magic-linked student signs in).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------------
-- roster: allow-list of enrolled student emails.
-- Maintained only via the admin/invite-roster.js script (service-role
-- key) — RLS is enabled with NO policies, so the browser (anon key)
-- has zero access to this table in either direction.
-- ---------------------------------------------------------------
create table if not exists public.roster (
  email text primary key,
  added_at timestamptz not null default now()
);

alter table public.roster enable row level security;

-- ---------------------------------------------------------------
-- quiz_attempts: one row per completed quiz attempt.
-- ---------------------------------------------------------------
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  quiz_id text not null,
  score int not null,
  total int not null,
  completed_at timestamptz not null default now()
);

create index if not exists quiz_attempts_user_id_idx on public.quiz_attempts (user_id);

alter table public.quiz_attempts enable row level security;

drop policy if exists "quiz_attempts: read own" on public.quiz_attempts;
create policy "quiz_attempts: read own" on public.quiz_attempts
  for select using (auth.uid() = user_id);

drop policy if exists "quiz_attempts: insert own" on public.quiz_attempts;
create policy "quiz_attempts: insert own" on public.quiz_attempts
  for insert with check (auth.uid() = user_id);
