import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
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
      <TextArea
        label="Community stakeholder notes"
        name="community_stakeholder_notes"
        value={data.community_stakeholder_notes}
        onChange={onChange}
        rows={4}
        placeholder="Community organisations, chiefs, and civil society groups engaged or to be engaged"
        error={errors.community_stakeholder_notes}
      />
      <TextArea
        label="Co-host and strategic delivery partners"
        name="co_host_partners"
        value={data.co_host_partners}
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
      <TextArea
        label="PR scope boundary"
        name="pr_scope_boundary"
        value={data.pr_scope_boundary}
        onChange={onChange}
        rows={4}
        placeholder="What is the PR partner responsible for, and where does their scope end and Atlas's begin? Be specific."
        required
        error={errors.pr_scope_boundary}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
