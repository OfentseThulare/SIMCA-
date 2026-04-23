import SliderCard from '../ui/SliderCard'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function ContactDatabasesSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Contact databases
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        What lists SAMCA already has, which Atlas will enrich, segment, and activate.
      </p>

      <RadioGroup
        label="Existing sponsor contact list"
        name="db_existing_sponsor_list"
        options={['Yes, in a spreadsheet', 'Yes, in a CRM', 'Partial, fragmented across sources', 'No list yet']}
        value={data.db_existing_sponsor_list}
        onChange={onChange}
        required
        error={errors.db_existing_sponsor_list}
      />
      <RadioGroup
        label="Existing delegate list"
        name="db_existing_delegate_list"
        options={['Yes', 'Partial', 'No list yet']}
        value={data.db_existing_delegate_list}
        onChange={onChange}
        required
        error={errors.db_existing_delegate_list}
      />
      <RadioGroup
        label="Existing speaker list"
        name="db_existing_speaker_list"
        options={['Yes', 'Partial', 'No list yet']}
        value={data.db_existing_speaker_list}
        onChange={onChange}
        required
        error={errors.db_existing_speaker_list}
      />
      <RadioGroup
        label="Media contact list"
        name="db_media_list"
        options={['Yes', 'Partial', 'No list yet']}
        value={data.db_media_list}
        onChange={onChange}
        required
        error={errors.db_media_list}
      />
      <RadioGroup
        label="Community stakeholder list"
        name="db_community_list"
        options={['Yes', 'Partial', 'No list yet']}
        value={data.db_community_list}
        onChange={onChange}
        error={errors.db_community_list}
      />
      <UploadOrTextArea
        label="Blacklist notes"
        textFieldName="db_blacklist_notes"
        uploadFieldName="db_blacklist_notes_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Any individuals, companies, or domains that must be excluded from all outreach"
        error={errors.db_blacklist_notes}
      />
      <UploadOrTextArea
        label="List handover notes"
        textFieldName="db_handover_notes"
        uploadFieldName="db_handover_notes_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="How you will share the lists. Upload in the Assets section or share via secure link."
        error={errors.db_handover_notes}
      />
      <RadioGroup
        label="POPIA consent status"
        name="db_gdpr_popia_consents"
        options={[
          'Yes, contacts opted in to receive MIS 2026 communications',
          'Partial, some opted in',
          'No explicit consent, cold outreach',
          'Not sure',
        ]}
        value={data.db_gdpr_popia_consents}
        onChange={onChange}
        required
        error={errors.db_gdpr_popia_consents}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
