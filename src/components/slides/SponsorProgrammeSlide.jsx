import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

const SPONSOR_GROUPS = [
  {
    heading: 'Group A — Mining Houses',
    targets: [
      { short: 'sibanye', label: 'Sibanye-Stillwater' },
      { short: 'harmony', label: 'Harmony Gold' },
      { short: 'impala', label: 'Impala Platinum' },
      { short: 'northam', label: 'Northam Platinum' },
      { short: 'valterra', label: 'Valterra Platinum' },
    ],
  },
  {
    heading: 'Group B — Government and DFI',
    targets: [
      { short: 'nyda', label: 'NYDA' },
      { short: 'dbsa', label: 'DBSA' },
      { short: 'idc', label: 'IDC' },
      { short: 'bojanala', label: 'Bojanala Platinum District Municipality' },
    ],
  },
  {
    heading: 'Group C — Equipment Suppliers',
    targets: [
      { short: 'sandvik', label: 'Sandvik SA' },
      { short: 'epiroc', label: 'Epiroc SA' },
      { short: 'bell', label: 'Bell Equipment' },
    ],
  },
]

const PRIORITY_OPTIONS = ['Top priority', 'Medium priority', 'Low priority', 'Do not approach']
const RELATIONSHIP_OPTIONS = [
  'Yes, active conversation',
  'Yes, dormant relationship',
  'No direct relationship',
  'Not sure',
]

export default function SponsorProgrammeSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Sponsor programme
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-6">
        This section maps the sponsor landscape so Atlas can build the right personalisation into outreach sequences and collateral. Atlas does not close sponsors; Atlas builds the pipeline and escalates warm leads. Closing is handled by SAMCA's business development team.
      </p>

      <RadioGroup
        label="Sponsor tiers status"
        name="sponsor_tiers_confirmed"
        options={[
          'Yes, tier structure is final',
          'In progress, will share separately',
          'No structure yet',
        ]}
        value={data.sponsor_tiers_confirmed}
        onChange={onChange}
        required
        error={errors.sponsor_tiers_confirmed}
      />
      <UploadOrTextArea
        label="Tier summary"
        textFieldName="sponsor_tier_summary"
        uploadFieldName="sponsor_tier_summary_upload"
        data={data}
        onChange={onChange}
        rows={5}
        placeholder="If confirmed, list tier names, price points, and headline benefits, or upload a tier document"
        error={errors.sponsor_tier_summary}
      />

      <div className="mt-10 mb-6">
        <p className="text-[13px] font-bold tracking-[0.08em] uppercase text-atlas-dark/45 mb-1">
          Twelve confirmed sponsor targets
        </p>
        <p className="text-[14px] text-atlas-dark/40 leading-relaxed">
          For each target below, set priority, existing relationship, and any known context. This data feeds the outreach sequence personalisation.
        </p>
      </div>

      {SPONSOR_GROUPS.map((group) => (
        <div key={group.heading} className="mb-10">
          <h3 className="text-[14px] font-bold text-atlas-dark mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {group.heading}
          </h3>
          {group.targets.map((target) => (
            <div key={target.short} className="mb-8 p-6 bg-atlas-cream/40 rounded-2xl border border-black/[0.03]">
              <p className="text-[15px] font-semibold text-atlas-dark mb-5">{target.label}</p>

              <RadioGroup
                label="Priority"
                name={`sponsor_${target.short}_priority`}
                options={PRIORITY_OPTIONS}
                value={data[`sponsor_${target.short}_priority`]}
                onChange={onChange}
                required
                error={errors[`sponsor_${target.short}_priority`]}
              />
              <RadioGroup
                label="Existing relationship"
                name={`sponsor_${target.short}_existing_relationship`}
                options={RELATIONSHIP_OPTIONS}
                value={data[`sponsor_${target.short}_existing_relationship`]}
                onChange={onChange}
                error={errors[`sponsor_${target.short}_existing_relationship`]}
              />
              <TextInput
                label="Notes"
                name={`sponsor_${target.short}_notes`}
                value={data[`sponsor_${target.short}_notes`]}
                onChange={onChange}
                placeholder="Known CSI focus, prior engagements, sensitivities, or named contacts inside the company"
                error={errors[`sponsor_${target.short}_notes`]}
              />
            </div>
          ))}
        </div>
      ))}

      <UploadOrTextArea
        label="Existing sponsor conversations"
        textFieldName="sponsor_existing_conversations"
        uploadFieldName="sponsor_existing_conversations_upload"
        data={data}
        onChange={onChange}
        rows={5}
        placeholder="Which sponsors are already in conversation, and with whom? Include stage and last-touch date if known."
        error={errors.sponsor_existing_conversations}
      />
      <TextArea
        label="Confirmed sponsors"
        name="sponsor_confirmed"
        value={data.sponsor_confirmed}
        onChange={onChange}
        rows={3}
        placeholder="Any sponsors already contractually committed"
        error={errors.sponsor_confirmed}
      />
      <UploadOrTextArea
        label="CSI focus notes"
        textFieldName="sponsor_csi_focus_notes"
        uploadFieldName="sponsor_csi_focus_notes_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Known CSI focus areas by company, if available"
        error={errors.sponsor_csi_focus_notes}
      />
      <TextInput
        label="Target exhibitor count"
        name="sponsor_exhibitor_count"
        value={data.sponsor_exhibitor_count}
        onChange={onChange}
        placeholder="Target number of exhibitors. Default: 60"
        error={errors.sponsor_exhibitor_count}
      />
      <TextArea
        label="Delegate allocation notes"
        name="sponsor_delegate_allocation_notes"
        value={data.sponsor_delegate_allocation_notes}
        onChange={onChange}
        rows={3}
        placeholder="Pass allocations per tier and exhibitor category"
        error={errors.sponsor_delegate_allocation_notes}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
