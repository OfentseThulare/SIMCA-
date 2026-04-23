import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function GovernmentPartnersSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Government and partner ecosystem
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        The external relationship map Atlas needs to understand the full stakeholder landscape.
      </p>

      <TextInput
        label="Premier's Office liaison"
        name="premier_office_contact"
        value={data.premier_office_contact}
        onChange={onChange}
        placeholder="Primary liaison at the Premier's Office"
        error={errors.premier_office_contact}
      />
      <TextInput
        label="DMPR or equivalent ministry contact"
        name="dmpr_contact"
        value={data.dmpr_contact}
        onChange={onChange}
        error={errors.dmpr_contact}
      />
      <TextInput
        label="NWDC contact"
        name="nwdc_contact"
        value={data.nwdc_contact}
        onChange={onChange}
        placeholder="North West Development Corporation contact"
        error={errors.nwdc_contact}
      />
      <TextInput
        label="Bojanala District Municipality contact"
        name="bojanala_municipality_contact"
        value={data.bojanala_municipality_contact}
        onChange={onChange}
        error={errors.bojanala_municipality_contact}
      />
      <UploadOrTextArea
        label="Community stakeholder notes"
        textFieldName="community_stakeholder_notes"
        uploadFieldName="community_stakeholder_notes_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Community organisations, chiefs, and civil society groups engaged or to be engaged"
        error={errors.community_stakeholder_notes}
      />
      <UploadOrTextArea
        label="Co-host and strategic delivery partners"
        textFieldName="co_host_partners"
        uploadFieldName="co_host_partners_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Any co-hosting, co-branded, or strategic delivery partners not already mentioned"
        error={errors.co_host_partners}
      />
      <TextInput
        label="PR and earned media partner name"
        name="pr_partner_name"
        value={data.pr_partner_name}
        onChange={onChange}
        placeholder="Name of the PR partner Atlas will coordinate with"
        required
        error={errors.pr_partner_name}
      />
      <TextInput
        label="PR partner email"
        name="pr_partner_contact"
        type="email"
        value={data.pr_partner_contact}
        onChange={onChange}
        placeholder="Email of the PR partner"
        required
        error={errors.pr_partner_contact}
      />
      <UploadOrTextArea
        label="PR scope boundary"
        textFieldName="pr_scope_boundary"
        uploadFieldName="pr_scope_boundary_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="What is the PR partner responsible for, and where does their scope end and Atlas's begin? Be specific."
        required
        error={errors.pr_scope_boundary}
      />
      <UploadOrTextArea
        label="PR partner scope document"
        textFieldName="pr_partner_mou"
        uploadFieldName="pr_partner_mou_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Paste or upload the MoU, engagement letter, or scope agreement with the PR partner so Atlas can see exactly where their responsibilities end and ours begin."
        error={errors.pr_partner_mou}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
