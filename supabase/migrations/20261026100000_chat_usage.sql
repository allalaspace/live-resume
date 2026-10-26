create table if not exists public.chat_usage (
  id bigint generated always as identity primary key,
  ip_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists chat_usage_ip_hash_created_at_idx
  on public.chat_usage (ip_hash, created_at desc);

alter table public.chat_usage enable row level security;

revoke all on table public.chat_usage from anon, authenticated;
