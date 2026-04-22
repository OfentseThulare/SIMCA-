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
import BudgetSlide from './slides/BudgetSlide'
import UploadsSlide from './slides/UploadsSlide'
import GoalsSlide from './slides/GoalsSlide'
import ThankYouSlide from './slides/ThankYouSlide'

const TOTAL_SLIDES = 16

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

  // Slide 3: Brand
  brand_logo_note: '',
  brand_primary_colours: '',
  brand_secondary_colours: '',
  brand_typography: '',
  brand_tone: '',
  brand_voice_words: '',
  brand_guidelines_exist: '',
  brand_dos: '',
  brand_donts: '',

  // Slide 4: Event
  event_three_pillars_confirmed: '',
  event_pillar_notes: '',
  event_narrative_themes: '',
  event_day1_theme: '',
  event_day2_theme: '',
  event_day3_theme: '',
  event_hero_message: '',
  event_differentiation: '',
  event_restricted_topics: '',

  // Slide 5: Sponsors
  sponsor_tiers_confirmed: '',
  sponsor_tier_summary: '',
  sponsor_priority_targets: '',
  sponsor_existing_conversations: '',
  sponsor_confirmed: '',
  sponsor_csi_focus_notes: '',
  sponsor_exhibitor_count: '',
  sponsor_delegate_allocation_notes: '',

  // Slide 6: Speakers
  speaker_confirmed_list: '',
  speaker_target_list: '',
  endorsement_premier_status: '',
  endorsement_minister_status: '',
  endorsement_traditional_leadership: '',
  endorsement_video_status: '',
  vip_guest_list_notes: '',
  ceo_recognition_nominees: '',

  // Slide 7: Schools
  schools_invitation_status: '',
  schools_target_list: '',
  schools_ngo_partner_name: '',
  schools_ngo_partner_contact: '',
  schools_flowsync_contact: '',
  schools_department_contact: '',
  youth_challenge_format: '',

  // Slide 8: Government
  premier_office_contact: '',
  dmpr_contact: '',
  nwdc_contact: '',
  bojanala_municipality_contact: '',
  community_stakeholder_notes: '',
  co_host_partners: '',
  pr_partner_name: '',
  pr_partner_contact: '',
  pr_scope_boundary: '',

  // Slide 9: Databases
  db_existing_sponsor_list: '',
  db_existing_delegate_list: '',
  db_existing_speaker_list: '',
  db_media_list: '',
  db_community_list: '',
  db_blacklist_notes: '',
  db_handover_notes: '',
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

  // Slide 11: Content
  content_existing_video: '',
  content_existing_photography: '',
  content_fireside_recordings: '',
  content_fireside_themes: '',
  content_testimonials: '',
  content_case_studies: '',
  content_licensed_footage: '',
  content_approval_workflow: '',

  // Slide 12: Budget
  budget_approval_status: '',
  budget_premier_office_status: '',
  budget_linkedin_ad_budget_intent: '',
  budget_other_paid_channels: '',
  commercial_deposit_acknowledgement: '',
  commercial_preferred_invoice_cycle: '',

  // Slide 13: Uploads
  asset_notes: '',
  asset_external_links: '',

  // Slide 14: Goals
  goal_sponsor_target: '',
  goal_delegate_target: '',
  goal_media_mentions_target: '',
  goal_linkedin_follower_growth: '',
  goal_primary_success_metric: '',
  goal_biggest_risk: '',
  goal_post_event_vision: '',
  goal_three_year_plan_notes: '',
}

const REQUIRED_FIELDS = {
  1: ['primary_contact_full_name', 'primary_contact_role', 'primary_contact_email', 'primary_contact_phone', 'preferred_communication', 'approval_authority'],
  2: ['samca_registered_name', 'samca_entity_type', 'samca_registration_number', 'samca_physical_address', 'samca_pbo_status', 'samca_csd_registration', 'samca_billing_contact_name', 'samca_billing_contact_email'],
  3: ['brand_primary_colours', 'brand_tone', 'brand_guidelines_exist'],
  4: ['event_three_pillars_confirmed', 'event_narrative_themes', 'event_hero_message', 'event_differentiation'],
  5: ['sponsor_tiers_confirmed', 'sponsor_priority_targets'],
  6: ['speaker_target_list', 'endorsement_premier_status'],
  7: ['schools_invitation_status', 'schools_target_list'],
  8: ['pr_partner_name', 'pr_partner_contact', 'pr_scope_boundary'],
  9: ['db_existing_sponsor_list', 'db_existing_delegate_list', 'db_existing_speaker_list', 'db_media_list', 'db_gdpr_popia_consents'],
  10: ['platform_linkedin_page_status', 'platform_whatsapp_business', 'platform_existing_crm'],
  11: ['content_existing_video', 'content_existing_photography', 'content_approval_workflow'],
  12: ['budget_approval_status', 'budget_premier_office_status', 'budget_linkedin_ad_budget_intent', 'commercial_deposit_acknowledgement', 'commercial_preferred_invoice_cycle'],
  13: [],
  14: ['goal_sponsor_target', 'goal_delegate_target', 'goal_primary_success_metric', 'goal_biggest_risk', 'goal_post_event_vision'],
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
    const required = REQUIRED_FIELDS[slideIndex]
    if (!required) return true

    const newErrors = {}
    for (const field of required) {
      const value = formData[field]
      if (value === '' || value === null || value === undefined) {
        newErrors[field] = 'This field is required'
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
        alert('Configuration error: Supabase is not configured. Please contact Atlas directly at hello@atlasconsultinggroup.co.za')
        return
      }

      const submission = {
        ...formData,
        uploaded_assets: uploadedFiles.map(({ filename, url, category }) => ({ filename, url, category })),
      }

      const { error } = await supabase.from('mis2026_onboarding_submissions').insert([submission])

      if (error) {
        console.error('Submission error:', error)
        alert(`Submission failed: ${error.message}\n\nYour data is saved locally. Please contact Atlas at hello@atlasconsultinggroup.co.za`)
      } else {
        try { localStorage.removeItem(STORAGE_KEY) } catch {}
        setIsSubmitted(true)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert(`Unexpected error: ${err.message}\n\nYour data is saved locally. Please contact Atlas at hello@atlasconsultinggroup.co.za`)
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
    <BudgetSlide key="budget" {...slideProps} />,
    <UploadsSlide key="uploads" {...slideProps} uploadedFiles={uploadedFiles} onFilesChange={setUploadedFiles} />,
    <GoalsSlide key="goals" {...slideProps} />,
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
