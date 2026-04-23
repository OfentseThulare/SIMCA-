import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function EntityDetailsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        SAMCA entity and commercial details
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Legal and commercial information needed for invoicing, compliance, and government sponsor eligibility.
      </p>

      <TextInput
        label="Registered entity name"
        name="samca_registered_name"
        value={data.samca_registered_name}
        onChange={onChange}
        placeholder="Full legal entity name as per CIPC"
        required
        error={errors.samca_registered_name}
      />
      <RadioGroup
        label="Entity type"
        name="samca_entity_type"
        options={['NPC (Non-Profit Company)', 'NPO (Non-Profit Organisation)', 'PTY Ltd']}
        allowOther
        value={data.samca_entity_type}
        onChange={onChange}
        required
        error={errors.samca_entity_type}
      />
      <TextInput
        label="Registration number"
        name="samca_registration_number"
        value={data.samca_registration_number}
        onChange={onChange}
        required
        error={errors.samca_registration_number}
      />
      <TextInput
        label="VAT number"
        name="samca_vat_number"
        value={data.samca_vat_number}
        onChange={onChange}
        placeholder="Leave blank if not VAT registered"
        error={errors.samca_vat_number}
      />
      <TextArea
        label="Physical address"
        name="samca_physical_address"
        value={data.samca_physical_address}
        onChange={onChange}
        rows={2}
        required
        error={errors.samca_physical_address}
      />
      <TextArea
        label="Postal address"
        name="samca_postal_address"
        value={data.samca_postal_address}
        onChange={onChange}
        rows={2}
        placeholder="If different from physical"
        error={errors.samca_postal_address}
      />
      <RadioGroup
        label="PBO status"
        name="samca_pbo_status"
        options={[
          'Yes, PBO approved with Section 18A',
          'NPO/NPC only, no PBO status',
          'Application in progress',
          'Not sure',
        ]}
        value={data.samca_pbo_status}
        onChange={onChange}
        required
        error={errors.samca_pbo_status}
      />
      <RadioGroup
        label="CSD registration"
        name="samca_csd_registration"
        options={['Yes, CSD registered', 'No', 'In progress', 'Not sure']}
        value={data.samca_csd_registration}
        onChange={onChange}
        required
        error={errors.samca_csd_registration}
      />
      <RadioGroup
        label="B-BBEE status"
        name="samca_bbbee_status"
        options={[
          'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5 or below',
          'No certificate', 'Exempt Micro Enterprise', 'Not sure',
        ]}
        value={data.samca_bbbee_status}
        onChange={onChange}
        error={errors.samca_bbbee_status}
      />
      <TextInput
        label="Billing contact name"
        name="samca_billing_contact_name"
        value={data.samca_billing_contact_name}
        onChange={onChange}
        required
        error={errors.samca_billing_contact_name}
      />
      <TextInput
        label="Billing contact email"
        name="samca_billing_contact_email"
        type="email"
        value={data.samca_billing_contact_email}
        onChange={onChange}
        required
        error={errors.samca_billing_contact_email}
      />
      <UploadOrTextArea
        label="Banking notes"
        textFieldName="samca_banking_notes"
        uploadFieldName="samca_banking_notes_upload"
        data={data}
        onChange={onChange}
        rows={2}
        placeholder="Banking details for reimbursements only, or upload a bank confirmation letter. Do not paste full account numbers in free text; we collect those separately via secure channel."
        error={errors.samca_banking_notes}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
