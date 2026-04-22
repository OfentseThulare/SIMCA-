-- Table for onboarding submissions
create table if not exists public.mis2026_onboarding_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Slide 1: Primary contact and decision rights
  primary_contact_full_name text,
  primary_contact_role text,
  primary_contact_email text,
  primary_contact_phone text,
  primary_contact_whatsapp text,
  preferred_communication text,
  approval_authority text,
  escalation_contact_name text,
  escalation_contact_email text,

  -- Slide 2: SAMCA entity
  samca_registered_name text,
  samca_entity_type text,
  samca_registration_number text,
  samca_vat_number text,
  samca_physical_address text,
  samca_postal_address text,
  samca_pbo_status text,
  samca_csd_registration text,
  samca_bbbee_status text,
  samca_billing_contact_name text,
  samca_billing_contact_email text,
  samca_banking_notes text,

  -- Slide 3: Brand
  brand_logo_note text,
  brand_primary_colours text,
  brand_secondary_colours text,
  brand_typography text,
  brand_tone text,
  brand_voice_words text,
  brand_guidelines_exist text,
  brand_dos text,
  brand_donts text,

  -- Slide 4: Event structure
  event_three_pillars_confirmed text,
  event_pillar_notes text,
  event_narrative_themes text,
  event_day1_theme text,
  event_day2_theme text,
  event_day3_theme text,
  event_hero_message text,
  event_differentiation text,
  event_restricted_topics text,

  -- Slide 5: Sponsors
  sponsor_tiers_confirmed text,
  sponsor_tier_summary text,
  sponsor_priority_targets text,
  sponsor_existing_conversations text,
  sponsor_confirmed text,
  sponsor_csi_focus_notes text,
  sponsor_exhibitor_count text,
  sponsor_delegate_allocation_notes text,

  -- Slide 6: Speakers and endorsements
  speaker_confirmed_list text,
  speaker_target_list text,
  endorsement_premier_status text,
  endorsement_minister_status text,
  endorsement_traditional_leadership text,
  endorsement_video_status text,
  vip_guest_list_notes text,
  ceo_recognition_nominees text,

  -- Slide 7: Schools
  schools_invitation_status text,
  schools_target_list text,
  schools_ngo_partner_name text,
  schools_ngo_partner_contact text,
  schools_flowsync_contact text,
  schools_department_contact text,
  youth_challenge_format text,

  -- Slide 8: Government and partners
  premier_office_contact text,
  dmpr_contact text,
  nwdc_contact text,
  bojanala_municipality_contact text,
  community_stakeholder_notes text,
  co_host_partners text,
  pr_partner_name text,
  pr_partner_contact text,
  pr_scope_boundary text,

  -- Slide 9: Databases
  db_existing_sponsor_list text,
  db_existing_delegate_list text,
  db_existing_speaker_list text,
  db_media_list text,
  db_community_list text,
  db_blacklist_notes text,
  db_handover_notes text,
  db_gdpr_popia_consents text,

  -- Slide 10: Platforms
  platform_linkedin_page_status text,
  platform_linkedin_admin_name text,
  platform_website_domain text,
  platform_domain_registrar text,
  platform_dns_access text,
  platform_cpanel_provider text,
  platform_google_workspace text,
  platform_email_send_domain text,
  platform_whatsapp_business text,
  platform_existing_crm text,
  platform_crm_name text,
  platform_google_ads_account text,
  platform_google_analytics text,
  platform_social_accounts_other text,

  -- Slide 11: Content
  content_existing_video text,
  content_existing_photography text,
  content_fireside_recordings text,
  content_fireside_themes text,
  content_testimonials text,
  content_case_studies text,
  content_licensed_footage text,
  content_approval_workflow text,

  -- Slide 12: Budget
  budget_approval_status text,
  budget_premier_office_status text,
  budget_linkedin_ad_budget_intent text,
  budget_other_paid_channels text,
  commercial_deposit_acknowledgement text,
  commercial_preferred_invoice_cycle text,

  -- Slide 13: Uploads
  uploaded_assets jsonb not null default '[]'::jsonb,
  asset_notes text,
  asset_external_links text,

  -- Slide 14: Goals
  goal_sponsor_target text,
  goal_delegate_target text,
  goal_media_mentions_target text,
  goal_linkedin_follower_growth text,
  goal_primary_success_metric text,
  goal_biggest_risk text,
  goal_post_event_vision text,
  goal_three_year_plan_notes text
);

-- Trigger to keep updated_at current
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger mis2026_onboarding_updated_at
  before update on public.mis2026_onboarding_submissions
  for each row execute procedure public.handle_updated_at();

-- Storage bucket for uploads
insert into storage.buckets (id, name, public)
values ('mis2026-onboarding-assets', 'mis2026-onboarding-assets', true)
on conflict (id) do nothing;

-- Row Level Security
alter table public.mis2026_onboarding_submissions enable row level security;

-- Allow anonymous inserts (public onboarding form)
create policy "anon_insert_onboarding"
  on public.mis2026_onboarding_submissions
  for insert
  to anon
  with check (true);

-- Allow authenticated Atlas team to read
create policy "authenticated_read_onboarding"
  on public.mis2026_onboarding_submissions
  for select
  to authenticated
  using (true);

-- Storage policies: allow anon upload, authenticated read
create policy "anon_upload_assets"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'mis2026-onboarding-assets');

create policy "public_read_assets"
  on storage.objects
  for select
  using (bucket_id = 'mis2026-onboarding-assets');
