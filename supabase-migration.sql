-- Studium Generale · Supabase schema
-- Paste this ENTIRE file into Supabase → SQL Editor → New query → Run

-- 1. PROFILES: one row per authenticated user, auto-created on signup
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text,
  created_at timestamptz default now(),
  streak_season_start date default current_date,
  sound_on boolean default true
);

-- 2. SEEN: every folio a user has viewed (powers the collection + wing completion)
create table if not exists seen (
  user_id uuid references auth.users on delete cascade,
  folio_slug text not null,
  faculty text not null,
  seen_at timestamptz default now(),
  primary key (user_id, folio_slug)
);
create index if not exists seen_user_faculty on seen(user_id, faculty);
create index if not exists seen_user_day on seen(user_id, (seen_at::date));

-- 3. THESAURUS: double-tapped folios, the user's personal canon
create table if not exists thesaurus (
  user_id uuid references auth.users on delete cascade,
  folio_slug text not null,
  faculty text not null,
  title text,
  source text,
  note text,
  kept_at timestamptz default now(),
  primary key (user_id, folio_slug)
);
create index if not exists thesaurus_user on thesaurus(user_id, kept_at desc);

-- 4. VOTES: for Suffragium (poll) cards -- public aggregate, private vote
create table if not exists votes (
  user_id uuid references auth.users on delete cascade,
  folio_slug text not null,
  choice int not null,
  voted_at timestamptz default now(),
  primary key (user_id, folio_slug)
);
create index if not exists votes_folio on votes(folio_slug);

-- Public aggregate view (safe for anon reads)
create or replace view vote_tallies as
  select folio_slug, choice, count(*)::int as n
  from votes group by folio_slug, choice;

-- =============== ROW LEVEL SECURITY ===============
-- Users can only touch their own rows. The anon key cannot see other users.

alter table profiles enable row level security;
alter table seen enable row level security;
alter table thesaurus enable row level security;
alter table votes enable row level security;

-- PROFILES: user can read + update their own row only
drop policy if exists "profiles_self_read" on profiles;
drop policy if exists "profiles_self_write" on profiles;
create policy "profiles_self_read" on profiles for select using (auth.uid() = id);
create policy "profiles_self_write" on profiles for update using (auth.uid() = id);
create policy "profiles_self_insert" on profiles for insert with check (auth.uid() = id);

-- SEEN: full CRUD on your own
drop policy if exists "seen_self" on seen;
create policy "seen_self" on seen for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- THESAURUS: full CRUD on your own
drop policy if exists "thesaurus_self" on thesaurus;
create policy "thesaurus_self" on thesaurus for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- VOTES: user writes own, anyone (authed) reads tallies via the view
drop policy if exists "votes_self_write" on votes;
drop policy if exists "votes_self_read" on votes;
create policy "votes_self_write" on votes for insert with check (auth.uid() = user_id);
create policy "votes_self_update" on votes for update using (auth.uid() = user_id);
create policy "votes_self_read" on votes for select using (auth.uid() = user_id);

-- Grant read on the aggregate view to anon + authenticated
grant select on vote_tallies to anon, authenticated;

-- =============== AUTO-PROFILE on signup ===============
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
