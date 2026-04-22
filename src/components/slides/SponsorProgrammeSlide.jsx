import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function SponsorProgrammeSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Sponsor programme
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        The commercial engine. Tier structure, target list, existing conversations, and priority order.
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
      <TextArea
        label="Tier summary"
        name="sponsor_tier_summary"
        value={data.sponsor_tier_summary}
        onChange={onChange}
        rows={5}
        placeholder="If confirmed, list tier names, price points, and headline benefits. Example: Platinum R500k, Gold R250k, Silver R100k."
        error={errors.sponsor_tier_summary}
      />
      <TextArea
        label="Priority sponsor targets"
        name="sponsor_priority_targets"
        value={data.sponsor_priority_targets}
        onChange={onChange}
        rows={5}
        placeholder="Top 10 to 20 sponsor target companies in priority order"
        required
        error={errors.sponsor_priority_targets}
      />
      <TextArea
        label="Existing sponsor conversations"
        name="sponsor_existing_conversations"
        value={data.sponsor_existing_conversations}
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
      <TextArea
        label="CSI focus notes"
        name="sponsor_csi_focus_notes"
        value={data.sponsor_csi_focus_notes}
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
