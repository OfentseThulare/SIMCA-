import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function PlatformAccessSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Platform access and credentials
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Confirms what platforms exist and who holds access. Credential handover happens separately via a secure link.
      </p>

      <div className="bg-atlas-cream border-l-4 border-atlas-red/30 p-5 rounded-r-xl mb-10">
        <p className="text-[14px] text-atlas-dark/60 leading-relaxed">
          <strong className="text-atlas-dark font-semibold">Security note.</strong>{' '}
          Do not enter passwords, access tokens, or API keys in this form. Atlas will send a secure link (1Password or Bitwarden) for credential handover after this form is submitted. This section is to confirm what exists and who holds access.
        </p>
      </div>

      <RadioGroup
        label="LinkedIn page status"
        name="platform_linkedin_page_status"
        options={[
          'SAMCA has existing LinkedIn page',
          'MIS 2026 dedicated page exists',
          'Needs to be created by Atlas',
          'Not sure',
        ]}
        value={data.platform_linkedin_page_status}
        onChange={onChange}
        required
        error={errors.platform_linkedin_page_status}
      />
      <TextInput
        label="LinkedIn page admin name"
        name="platform_linkedin_admin_name"
        value={data.platform_linkedin_admin_name}
        onChange={onChange}
        placeholder="Name of current LinkedIn page admin"
        error={errors.platform_linkedin_admin_name}
      />
      <TextInput
        label="Website domain"
        name="platform_website_domain"
        value={data.platform_website_domain}
        onChange={onChange}
        placeholder="Primary website URL, e.g. www.samca.org.za"
        error={errors.platform_website_domain}
      />
      <TextInput
        label="Domain registrar"
        name="platform_domain_registrar"
        value={data.platform_domain_registrar}
        onChange={onChange}
        placeholder="e.g. GoDaddy, Afrihost, Hetzner"
        error={errors.platform_domain_registrar}
      />
      <RadioGroup
        label="DNS access"
        name="platform_dns_access"
        options={['SAMCA holds DNS access', 'Third party holds DNS access', 'Not sure']}
        value={data.platform_dns_access}
        onChange={onChange}
        error={errors.platform_dns_access}
      />
      <TextInput
        label="Hosting or cPanel provider"
        name="platform_cpanel_provider"
        value={data.platform_cpanel_provider}
        onChange={onChange}
        error={errors.platform_cpanel_provider}
      />
      <RadioGroup
        label="Email and collaboration platform"
        name="platform_google_workspace"
        options={['Yes, SAMCA uses Google Workspace', 'Yes, Microsoft 365', 'Other', 'None']}
        value={data.platform_google_workspace}
        onChange={onChange}
        error={errors.platform_google_workspace}
      />
      <TextInput
        label="Preferred campaign send-from email"
        name="platform_email_send_domain"
        value={data.platform_email_send_domain}
        onChange={onChange}
        placeholder="Preferred send-from domain for campaigns, e.g. info@samca.org.za"
        error={errors.platform_email_send_domain}
      />
      <RadioGroup
        label="WhatsApp Business status"
        name="platform_whatsapp_business"
        options={[
          'Yes, existing WhatsApp Business account',
          'Personal WhatsApp only',
          'Need Atlas to set up dedicated MIS 2026 number',
        ]}
        value={data.platform_whatsapp_business}
        onChange={onChange}
        required
        error={errors.platform_whatsapp_business}
      />
      <RadioGroup
        label="Existing CRM"
        name="platform_existing_crm"
        options={[
          'Yes, name specified below',
          'No, Atlas to recommend and set up',
          'Not sure',
        ]}
        value={data.platform_existing_crm}
        onChange={onChange}
        required
        error={errors.platform_existing_crm}
      />
      <TextInput
        label="CRM name"
        name="platform_crm_name"
        value={data.platform_crm_name}
        onChange={onChange}
        placeholder="If yes, which CRM"
        error={errors.platform_crm_name}
      />
      <RadioGroup
        label="Google Ads account"
        name="platform_google_ads_account"
        options={['Yes', 'No', 'Not sure']}
        value={data.platform_google_ads_account}
        onChange={onChange}
        error={errors.platform_google_ads_account}
      />
      <RadioGroup
        label="Google Analytics"
        name="platform_google_analytics"
        options={['Yes, GA4 installed', 'Yes, Universal Analytics only', 'No', 'Not sure']}
        value={data.platform_google_analytics}
        onChange={onChange}
        error={errors.platform_google_analytics}
      />
      <TextArea
        label="Other social media accounts"
        name="platform_social_accounts_other"
        value={data.platform_social_accounts_other}
        onChange={onChange}
        rows={3}
        placeholder="Any other social accounts Atlas should know about: Facebook, Instagram, YouTube, X, TikTok. Include handles."
        error={errors.platform_social_accounts_other}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
