import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function SchoolsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        School Innovation Programme
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-6">
        The youth pillar and all partner relationships tied to it.
      </p>

      <div className="bg-atlas-cream border-l-4 border-atlas-red/30 p-5 rounded-r-xl mb-10">
        <p className="text-[14px] text-atlas-dark/70 leading-relaxed">
          <strong className="text-atlas-dark font-semibold">POPIA note.</strong>{' '}
          The Schools Innovation Programme involves learners under the age of 18. Atlas's automation is designed with guardian consent as a hard gate: no learner data is processed without confirmed parental or guardian consent. SAMCA and Atlas are each independently responsible for their own POPIA obligations on this programme.
        </p>
      </div>

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
      <UploadOrTextArea
        label="Schools target list"
        textFieldName="schools_target_list"
        uploadFieldName="schools_target_list_upload"
        data={data}
        onChange={onChange}
        rows={6}
        placeholder="List of schools being invited. Name, district, contact person if known. Upload a CSV if you prefer."
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
      <UploadOrTextArea
        label="Department of Education contacts"
        textFieldName="schools_department_contact"
        uploadFieldName="schools_department_contact_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Department of Education contacts engaged, and status"
        error={errors.schools_department_contact}
      />
      <UploadOrTextArea
        label="Youth Innovation Challenge format"
        textFieldName="youth_challenge_format"
        uploadFieldName="youth_challenge_format_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Format, prizes, eligibility, and judging criteria for the Youth Innovation Challenge, or upload the brief"
        error={errors.youth_challenge_format}
      />
      <RadioGroup
        label="Guardian consent readiness"
        name="schools_guardian_consent_ready"
        options={[
          'Yes, guardian consent template drafted and legally reviewed',
          'In progress',
          'Not started',
        ]}
        value={data.schools_guardian_consent_ready}
        onChange={onChange}
        required
        error={errors.schools_guardian_consent_ready}
      />
      <RadioGroup
        label="Schools programme MoU status"
        name="schools_mou_status"
        options={[
          'Signed with FlowSync',
          'Signed with NGO partner',
          'Signed with Department of Education',
          'None signed yet',
        ]}
        value={data.schools_mou_status}
        onChange={onChange}
        error={errors.schools_mou_status}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
