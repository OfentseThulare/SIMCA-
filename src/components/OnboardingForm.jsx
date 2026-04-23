import { useState, useCallback, useRef, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import ProgressBar from './ui/ProgressBar'
import WelcomeSlide from './slides/WelcomeSlide'
import PrimaryContactSlide from './slides/PrimaryContactSlide'
import EntityDetailsSlide from './slides/EntityDetailsSlide'
import BrandFoundationsSlide from './slides/BrandFoundationsSlide'
import EventStructureSlide from './slides/EventStructureSlide'
import SponsorProgrammeSlide from './slides/SponsorProgrammeSlide'
import SpeakersEndorsementsSlide from './slides/SpeakersEndorsementsSlide'
import SchoolsSlide from './slides/SchoolsSlide'
import GovernmentPartnersSlide from './slides/GovernmentPartnersSlide'
import ContactDatabasesSlide from './slides/ContactDatabasesSlide'
import PlatformAccessSlide from './slides/PlatformAccessSlide'
import ContentAssetsSlide from './slides/ContentAssetsSlide'
import UploadsSlide from './slides/UploadsSlide'
import GoalsSlide from './slides/GoalsSlide'
import POPIAConsentSlide from './slides/POPIAConsentSlide'
import ThankYouSlide from './slides/ThankYouSlide'

const TOTAL_SLIDES = 16

const SPONSOR_SHORTS = [
  'sibanye', 'harmony', 'impala', 'northam', 'valterra',
  'nyda', 'dbsa', 'idc', 'bojanala',
  'sandvik', 'epiroc', 'bell',
]

const sponsorInitialData = SPONSOR_SHORTS.reduce((acc, short) => {
  acc[`sponsor_${short}_priority`] = ''
  acc[`sponsor_${short}_existing_relationship`] = ''
  acc[`sponsor_${short}_notes`] = ''
  return acc
}, {})

const INITIAL_DATA = {
  // Slide 1: Primary contact
  primary_contact_full_name: '',
  primary_contact_role: '',
  primary_contact_email: '',
  primary_contact_phone: '',
  primary_contact_whatsapp: '',
  preferred_communication: '',
  approval_authority: '',
  escalation_contact_name: '',
  escalation_contact_email: '',
  outreach_sequence_approver_name: '',
  outreach_sequence_approver_email: '',
  technical_handover_contact_name: '',
  technical_handover_contact_email: '',

  // Slide 2: Entity
  samca_registered_name: '',
  samca_entity_type: '',
  samca_registration_number: '',
  samca_vat_number: '',
  samca_physical_address: '',
  samca_postal_address: '',
  samca_pbo_status: '',
  samca_csd_registration: '',
  samca_bbbee_status: '',
  samca_billing_contact_name: '',
  samca_billing_contact_email: '',
  samca_banking_notes: '',
  samca_banking_notes_upload: '',

  // Slide 3: Brand
  brand_logo_note: '',
  brand_primary_colours: '',
  brand_primary_colours_upload: '',
  brand_secondary_colours: '',
  brand_typography: '',
  brand_tone: '',
  brand_voice_words: '',
  brand_voice_words_upload: '',
  brand_guidelines_exist: '',
  brand_dos: '',
  brand_dos_upload: '',
  brand_donts: '',
  brand_donts_upload: '',
  brand_sample_content: '',
  brand_sample_content_upload: '',

  // Slide 4: Event
  event_three_pillars_confirmed: '',
  event_pillar_notes: '',
  event_pillar_notes_upload: '',
  event_narrative_themes: '',
  event_narrative_themes_upload: '',
  event_day1_theme: '',
  event_day2_theme: '',
  event_day3_theme: '',
  event_hero_message: '',
  event_hero_message_upload: '',
  event_differentiation: '',
  event_differentiation_upload: '',
  event_restricted_topics: '',
  event_restricted_topics_upload: '',

  // Slide 5: Sponsors
  sponsor_tiers_confirmed: '',
  sponsor_tier_summary: '',
  sponsor_tier_summary_upload: '',
  ...sponsorInitialData,
  sponsor_existing_conversations: '',
  sponsor_existing_conversations_upload: '',
  sponsor_confirmed: '',
  sponsor_csi_focus_notes: '',
  sponsor_csi_focus_notes_upload: '',
  sponsor_exhibitor_count: '',
  sponsor_delegate_allocation_notes: '',

  // Slide 6: Speakers
  speaker_confirmed_list: '',
  speaker_confirmed_list_upload: '',
  speaker_target_list: '',
  speaker_target_list_upload: '',
  endorsement_premier_status: '',
  endorsement_minister_status: '',
  endorsement_traditional_leadership: '',
  endorsement_traditional_leadership_upload: '',
  endorsement_video_status: '',
  vip_guest_list_notes: '',
  vip_guest_list_notes_upload: '',
  ceo_recognition_nominees: '',
  ceo_recognition_nominees_upload: '',

  // Slide 7: Schools
  schools_invitation_status: '',
  schools_target_list: '',
  schools_target_list_upload: '',
  schools_ngo_partner_name: '',
  schools_ngo_partner_contact: '',
  schools_flowsync_contact: '',
  schools_department_contact: '',
  schools_department_contact_upload: '',
  youth_challenge_format: '',
  youth_challenge_format_upload: '',
  schools_guardian_consent_ready: '',
  schools_mou_status: '',

  // Slide 8: Government
  premier_office_contact: '',
  dmpr_contact: '',
  nwdc_contact: '',
  bojanala_municipality_contact: '',
  community_stakeholder_notes: '',
  community_stakeholder_notes_upload: '',
  co_host_partners: '',
  co_host_partners_upload: '',
  pr_partner_name: '',
  pr_partner_contact: '',
  pr_scope_boundary: '',
  pr_scope_boundary_upload: '',
  pr_partner_mou: '',
  pr_partner_mou_upload: '',

  // Slide 9: Databases
  db_existing_sponsor_list: '',
  db_existing_delegate_list: '',
  db_existing_speaker_list: '',
  db_media_list: '',
  db_community_list: '',
  db_blacklist_notes: '',
  db_blacklist_notes_upload: '',
  db_handover_notes: '',
  db_handover_notes_upload: '',
  db_gdpr_popia_consents: '',

  // Slide 10: Platforms
  platform_linkedin_page_status: '',
  platform_linkedin_admin_name: '',
  platform_website_domain: '',
  platform_domain_registrar: '',
  platform_dns_access: '',
  platform_cpanel_provider: '',
  platform_google_workspace: '',
  platform_email_send_domain: '',
  platform_whatsapp_business: '',
  platform_existing_crm: '',
  platform_crm_name: '',
  platform_google_ads_account: '',
  platform_google_analytics: '',
  platform_social_accounts_other: '',
  tooling_n8n_preference: '',
  tooling_crm_preference: '',
  tooling_crm_existing_name: '',
  tooling_email_outreach_platform: '',
  tooling_linkedin_sales_navigator: '',
  tooling_ticketing_platform: '',
  tooling_ticketing_existing_name: '',
  tooling_airtable_access: '',
  tooling_slack_or_teams: '',
  integration_whatsapp_business_api_provider: '',
  integration_whatsapp_utility_templates_status: '',
  integration_google_drive_folder: '',

  // Slide 11: Content
  content_existing_video: '',
  content_existing_photography: '',
  content_fireside_recordings: '',
  content_fireside_themes: '',
  content_fireside_themes_upload: '',
  content_testimonials: '',
  content_testimonials_upload: '',
  content_case_studies: '',
  content_case_studies_upload: '',
  content_licensed_footage: '',
  content_approval_workflow: '',
  content_approval_workflow_upload: '',

  // Slide 12: Uploads
  asset_notes: '',
  asset_external_links: '',

  // Slide 13: Goals
  goal_sponsor_target: '',
  goal_delegate_target: '',
  goal_media_mentions_target: '',
  goal_linkedin_follower_growth: '',
  goal_primary_success_metric: '',
  goal_biggest_risk: '',
  goal_post_event_vision: '',
  goal_three_year_plan_notes: '',
  goal_three_year_plan_notes_upload: '',

  // Slide 14: POPIA consent
  consent_popia_architecture_acknowledged: '',
  consent_one_unsolicited_email: '',
  consent_opt_out_propagation: '',
  consent_minor_data_handling: '',
  consent_data_ownership: '',
}

const sponsorPriorityRequired = SPONSOR_SHORTS.map((s) => `sponsor_${s}_priority`)

const REQUIRED_FIELDS = {
  1: [
    'primary_contact_full_name',
    'primary_contact_role',
    'primary_contact_email',
    'primary_contact_phone',
    'preferred_communication',
    'approval_authority',
    'outreach_sequence_approver_name',
    'outreach_sequence_approver_email',
  ],
  2: [
    'samca_registered_name',
    'samca_entity_type',
    'samca_registration_number',
    'samca_physical_address',
    'samca_pbo_status',
    'samca_csd_registration',
    'samca_billing_contact_name',
    'samca_billing_contact_email',
  ],
  3: ['brand_tone', 'brand_guidelines_exist'],
  4: ['event_three_pillars_confirmed'],
  5: ['sponsor_tiers_confirmed', ...sponsorPriorityRequired],
  6: ['endorsement_premier_status'],
  7: ['schools_invitation_status', 'schools_guardian_consent_ready'],
  8: ['pr_partner_name', 'pr_partner_contact'],
  9: [
    'db_existing_sponsor_list',
    'db_existing_delegate_list',
    'db_existing_speaker_list',
    'db_media_list',
    'db_gdpr_popia_consents',
  ],
  10: [
    'platform_linkedin_page_status',
    'platform_whatsapp_business',
    'platform_existing_crm',
    'tooling_crm_preference',
    'tooling_linkedin_sales_navigator',
    'tooling_ticketing_platform',
    'tooling_slack_or_teams',
    'integration_whatsapp_business_api_provider',
    'integration_whatsapp_utility_templates_status',
  ],
  11: ['content_existing_video', 'content_existing_photography'],
  12: [],
  13: [
    'goal_sponsor_target',
    'goal_delegate_target',
    'goal_primary_success_metric',
    'goal_biggest_risk',
    'goal_post_event_vision',
  ],
  14: [
    'consent_popia_architecture_acknowledged',
    'consent_one_unsolicited_email',
    'consent_opt_out_propagation',
    'consent_minor_data_handling',
    'consent_data_ownership',
  ],
}

// Validation requires either the text field OR its paired upload field to be present
const UPLOAD_OR_TEXT_REQUIRED = {
  3: [['brand_primary_colours', 'brand_primary_colours_upload']],
  4: [
    ['event_narrative_themes', 'event_narrative_themes_upload'],
    ['event_hero_message', 'event_hero_message_upload'],
    ['event_differentiation', 'event_differentiation_upload'],
  ],
  6: [['speaker_target_list', 'speaker_target_list_upload']],
  7: [['schools_target_list', 'schools_target_list_upload']],
  8: [['pr_scope_boundary', 'pr_scope_boundary_upload']],
  11: [['content_approval_workflow', 'content_approval_workflow_upload']],
}

const STORAGE_KEY = 'samca_mis2026_onboarding_draft'

export default function OnboardingForm() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const { slide } = JSON.parse(saved)
        return slide || 0
      }
    } catch {}
    return 0
  })

  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const { data } = JSON.parse(saved)
        return data ? { ...INITIAL_DATA, ...data } : INITIAL_DATA
      }
    } catch {}
    return INITIAL_DATA
  })

  const [uploadedFiles, setUploadedFiles] = useState([])
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data: formData, slide: currentSlide }))
    } catch {}
  }, [formData, currentSlide])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentSlide])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev }
        delete next[name]
        return next
      }
      return prev
    })
  }, [])

  const validateSlide = (slideIndex) => {
    const required = REQUIRED_FIELDS[slideIndex] || []
    const uploadOrText = UPLOAD_OR_TEXT_REQUIRED[slideIndex] || []

    const newErrors = {}
    for (const field of required) {
      const value = formData[field]
      if (value === '' || value === null || value === undefined) {
        newErrors[field] = 'This field is required'
      }
    }
    for (const [textField, uploadField] of uploadOrText) {
      const textValue = formData[textField]
      const uploadValue = formData[uploadField]
      const hasText = textValue !== '' && textValue != null
      const hasUpload = uploadValue !== '' && uploadValue != null
      if (!hasText && !hasUpload) {
        newErrors[textField] = 'Provide a typed response or upload a document'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const goNext = () => {
    if (!validateSlide(currentSlide)) return
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1))
    setErrors({})
  }

  const goBack = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
    setErrors({})
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      if (!supabase) {
        alert('Configuration error: Supabase is not configured. Please contact Atlas directly at hello@atlascg.co.za')
        return
      }

      const submission = {
        ...formData,
        uploaded_assets: uploadedFiles.map(({ filename, url, category }) => ({ filename, url, category })),
      }

      const { error } = await supabase.from('mis2026_onboarding_submissions').insert([submission])

      if (error) {
        console.error('Submission error:', error)
        alert(`Submission failed: ${error.message}\n\nYour data is saved locally. Please contact Atlas at hello@atlascg.co.za`)
      } else {
        try { localStorage.removeItem(STORAGE_KEY) } catch {}
        setIsSubmitted(true)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert(`Unexpected error: ${err.message}\n\nYour data is saved locally. Please contact Atlas at hello@atlascg.co.za`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const slideProps = {
    data: formData,
    onChange: handleChange,
    onNext: goNext,
    onBack: goBack,
    errors,
  }

  const slides = [
    <WelcomeSlide key="welcome" onNext={goNext} />,
    <PrimaryContactSlide key="contact" {...slideProps} />,
    <EntityDetailsSlide key="entity" {...slideProps} />,
    <BrandFoundationsSlide key="brand" {...slideProps} />,
    <EventStructureSlide key="event" {...slideProps} />,
    <SponsorProgrammeSlide key="sponsors" {...slideProps} />,
    <SpeakersEndorsementsSlide key="speakers" {...slideProps} />,
    <SchoolsSlide key="schools" {...slideProps} />,
    <GovernmentPartnersSlide key="government" {...slideProps} />,
    <ContactDatabasesSlide key="databases" {...slideProps} />,
    <PlatformAccessSlide key="platforms" {...slideProps} />,
    <ContentAssetsSlide key="content" {...slideProps} />,
    <UploadsSlide key="uploads" {...slideProps} uploadedFiles={uploadedFiles} onFilesChange={setUploadedFiles} />,
    <GoalsSlide key="goals" {...slideProps} />,
    <POPIAConsentSlide key="popia" {...slideProps} />,
    <ThankYouSlide key="thankyou" onBack={goBack} onSubmit={handleSubmit} isSubmitting={isSubmitting} isSubmitted={isSubmitted} />,
  ]

  return (
    <div className="h-screen relative bg-atlas-cream">
      <ProgressBar current={currentSlide} total={TOTAL_SLIDES - 1} />

      <div
        ref={scrollRef}
        className="h-screen overflow-y-auto form-scroll"
      >
        <div className="w-full max-w-2xl mx-auto px-5 md:px-6 pt-20 pb-20 min-h-screen flex flex-col justify-center">
          <div
            key={currentSlide}
            className="animate-slideIn"
          >
            {slides[currentSlide]}
          </div>
        </div>
      </div>
    </div>
  )
}
