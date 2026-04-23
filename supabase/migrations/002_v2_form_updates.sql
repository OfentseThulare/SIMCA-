-- v2 form updates. Commercial/budget columns are left in place so prior
-- submissions remain intact; the frontend no longer writes to them.

-- Primary contact additions
alter table public.mis2026_onboarding_submissions
  add column if not exists outreach_sequence_approver_name text,
  add column if not exists outreach_sequence_approver_email text,
  add column if not exists technical_handover_contact_name text,
  add column if not exists technical_handover_contact_email text;

-- Brand slide sample content + upload companions
alter table public.mis2026_onboarding_submissions
  add column if not exists brand_sample_content text,
  add column if not exists brand_sample_content_upload text,
  add column if not exists brand_primary_colours_upload text,
  add column if not exists brand_voice_words_upload text,
  add column if not exists brand_dos_upload text,
  add column if not exists brand_donts_upload text;

-- Event slide uploads
alter table public.mis2026_onboarding_submissions
  add column if not exists event_pillar_notes_upload text,
  add column if not exists event_narrative_themes_upload text,
  add column if not exists event_hero_message_upload text,
  add column if not exists event_differentiation_upload text,
  add column if not exists event_restricted_topics_upload text;

-- Sponsor 12 named targets
alter table public.mis2026_onboarding_submissions
  add column if not exists sponsor_sibanye_priority text,
  add column if not exists sponsor_sibanye_existing_relationship text,
  add column if not exists sponsor_sibanye_notes text,
  add column if not exists sponsor_harmony_priority text,
  add column if not exists sponsor_harmony_existing_relationship text,
  add column if not exists sponsor_harmony_notes text,
  add column if not exists sponsor_impala_priority text,
  add column if not exists sponsor_impala_existing_relationship text,
  add column if not exists sponsor_impala_notes text,
  add column if not exists sponsor_northam_priority text,
  add column if not exists sponsor_northam_existing_relationship text,
  add column if not exists sponsor_northam_notes text,
  add column if not exists sponsor_valterra_priority text,
  add column if not exists sponsor_valterra_existing_relationship text,
  add column if not exists sponsor_valterra_notes text,
  add column if not exists sponsor_nyda_priority text,
  add column if not exists sponsor_nyda_existing_relationship text,
  add column if not exists sponsor_nyda_notes text,
  add column if not exists sponsor_dbsa_priority text,
  add column if not exists sponsor_dbsa_existing_relationship text,
  add column if not exists sponsor_dbsa_notes text,
  add column if not exists sponsor_idc_priority text,
  add column if not exists sponsor_idc_existing_relationship text,
  add column if not exists sponsor_idc_notes text,
  add column if not exists sponsor_bojanala_priority text,
  add column if not exists sponsor_bojanala_existing_relationship text,
  add column if not exists sponsor_bojanala_notes text,
  add column if not exists sponsor_sandvik_priority text,
  add column if not exists sponsor_sandvik_existing_relationship text,
  add column if not exists sponsor_sandvik_notes text,
  add column if not exists sponsor_epiroc_priority text,
  add column if not exists sponsor_epiroc_existing_relationship text,
  add column if not exists sponsor_epiroc_notes text,
  add column if not exists sponsor_bell_priority text,
  add column if not exists sponsor_bell_existing_relationship text,
  add column if not exists sponsor_bell_notes text,
  add column if not exists sponsor_tier_summary_upload text,
  add column if not exists sponsor_existing_conversations_upload text,
  add column if not exists sponsor_csi_focus_notes_upload text;

-- Speakers slide uploads
alter table public.mis2026_onboarding_submissions
  add column if not exists speaker_confirmed_list_upload text,
  add column if not exists speaker_target_list_upload text,
  add column if not exists endorsement_traditional_leadership_upload text,
  add column if not exists vip_guest_list_notes_upload text,
  add column if not exists ceo_recognition_nominees_upload text;

-- Schools slide uploads and new fields
alter table public.mis2026_onboarding_submissions
  add column if not exists schools_target_list_upload text,
  add column if not exists schools_department_contact_upload text,
  add column if not exists youth_challenge_format_upload text,
  add column if not exists schools_guardian_consent_ready text,
  add column if not exists schools_mou_status text;

-- Government / partners uploads
alter table public.mis2026_onboarding_submissions
  add column if not exists community_stakeholder_notes_upload text,
  add column if not exists co_host_partners_upload text,
  add column if not exists pr_scope_boundary_upload text,
  add column if not exists pr_partner_mou text,
  add column if not exists pr_partner_mou_upload text;

-- Databases slide uploads
alter table public.mis2026_onboarding_submissions
  add column if not exists db_blacklist_notes_upload text,
  add column if not exists db_handover_notes_upload text;

-- Tooling stack (PlatformAccess expansion)
alter table public.mis2026_onboarding_submissions
  add column if not exists tooling_n8n_preference text,
  add column if not exists tooling_crm_preference text,
  add column if not exists tooling_crm_existing_name text,
  add column if not exists tooling_email_outreach_platform text,
  add column if not exists tooling_linkedin_sales_navigator text,
  add column if not exists tooling_ticketing_platform text,
  add column if not exists tooling_ticketing_existing_name text,
  add column if not exists tooling_airtable_access text,
  add column if not exists tooling_slack_or_teams text,
  add column if not exists integration_whatsapp_business_api_provider text,
  add column if not exists integration_whatsapp_utility_templates_status text,
  add column if not exists integration_google_drive_folder text;

-- Content slide uploads
alter table public.mis2026_onboarding_submissions
  add column if not exists content_fireside_themes_upload text,
  add column if not exists content_testimonials_upload text,
  add column if not exists content_case_studies_upload text,
  add column if not exists content_approval_workflow_upload text;

-- Entity slide upload (banking letter)
alter table public.mis2026_onboarding_submissions
  add column if not exists samca_banking_notes_upload text;

-- Goals slide upload companion
alter table public.mis2026_onboarding_submissions
  add column if not exists goal_three_year_plan_notes_upload text;

-- POPIA and consent declarations
alter table public.mis2026_onboarding_submissions
  add column if not exists consent_popia_architecture_acknowledged text,
  add column if not exists consent_one_unsolicited_email text,
  add column if not exists consent_opt_out_propagation text,
  add column if not exists consent_minor_data_handling text,
  add column if not exists consent_data_ownership text;
