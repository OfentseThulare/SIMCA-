import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function SchoolsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        School Innovation Programme
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        The youth pillar and all partner relationships tied to it.
      </p>

      <RadioGroup
        label="School invitation status"
        name="schools_invitation_status"
        options={[
          'Letter drafted, not yet sent',
          'Letters sent, awaiting responses',
          'Some confirmations received',
          'Fully confirmed',
        ]}
        value={data.schools_invitation_status}
        onChange={onChange}
        required
        error={errors.schools_invitation_status}
      />
      <TextArea
        label="Schools target list"
        name="schools_target_list"
        value={data.schools_target_list}
        onChange={onChange}
        rows={6}
        placeholder="List of schools being invited. Name, district, contact person if known."
        required
        error={errors.schools_target_list}
      />
      <TextInput
        label="NGO partner name"
        name="schools_ngo_partner_name"
        value={data.schools_ngo_partner_name}
        onChange={onChange}
        placeholder="Name of the NGO partner working with you on the schools programme"
        error={errors.schools_ngo_partner_name}
      />
      <TextInput
        label="NGO partner contact email"
        name="schools_ngo_partner_contact"
        value={data.schools_ngo_partner_contact}
        onChange={onChange}
        placeholder="Contact email"
        error={errors.schools_ngo_partner_contact}
      />
      <TextInput
        label="FlowSync primary contact"
        name="schools_flowsync_contact"
        value={data.schools_flowsync_contact}
        onChange={onChange}
        error={errors.schools_flowsync_contact}
      />
      <TextArea
        label="Department of Education contacts"
        name="schools_department_contact"
        value={data.schools_department_contact}
        onChange={onChange}
        rows={3}
        placeholder="Department of Education contacts engaged, and status"
        error={errors.schools_department_contact}
      />
      <TextArea
        label="Youth Innovation Challenge format"
        name="youth_challenge_format"
        value={data.youth_challenge_format}
        onChange={onChange}
        rows={4}
        placeholder="Format, prizes, eligibility, and judging criteria for the Youth Innovation Challenge"
        error={errors.youth_challenge_format}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
