import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function PrimaryContactSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Primary contact and decision rights
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Tell us who Atlas liaises with day to day, who has approval authority, and how to escalate if needed.
      </p>

      <TextInput
        label="Full name"
        name="primary_contact_full_name"
        value={data.primary_contact_full_name}
        onChange={onChange}
        required
        error={errors.primary_contact_full_name}
      />
      <TextInput
        label="Role or title"
        name="primary_contact_role"
        value={data.primary_contact_role}
        onChange={onChange}
        required
        error={errors.primary_contact_role}
      />
      <TextInput
        label="Email address"
        name="primary_contact_email"
        type="email"
        value={data.primary_contact_email}
        onChange={onChange}
        required
        error={errors.primary_contact_email}
      />
      <TextInput
        label="Phone number"
        name="primary_contact_phone"
        type="tel"
        value={data.primary_contact_phone}
        onChange={onChange}
        required
        error={errors.primary_contact_phone}
      />
      <TextInput
        label="WhatsApp number"
        name="primary_contact_whatsapp"
        type="tel"
        value={data.primary_contact_whatsapp}
        onChange={onChange}
        placeholder="Only if different from phone"
        error={errors.primary_contact_whatsapp}
      />
      <RadioGroup
        label="Preferred communication channel"
        name="preferred_communication"
        options={['Email', 'WhatsApp', 'Phone call', 'In-person meeting']}
        value={data.preferred_communication}
        onChange={onChange}
        required
        error={errors.preferred_communication}
      />
      <RadioGroup
        label="Approval authority"
        name="approval_authority"
        options={[
          'I approve all content and spend',
          'I approve content, finance approves spend',
          'Board or Exco approves',
        ]}
        allowOther
        value={data.approval_authority}
        onChange={onChange}
        required
        error={errors.approval_authority}
      />
      <TextInput
        label="Escalation contact name"
        name="escalation_contact_name"
        value={data.escalation_contact_name}
        onChange={onChange}
        placeholder="Person to escalate to if primary is unavailable"
        error={errors.escalation_contact_name}
      />
      <TextInput
        label="Escalation contact email"
        name="escalation_contact_email"
        type="email"
        value={data.escalation_contact_email}
        onChange={onChange}
        error={errors.escalation_contact_email}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
