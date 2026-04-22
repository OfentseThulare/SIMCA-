import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function GoalsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Strategic goals and success metrics
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Aligns Atlas and SAMCA on what success looks like so every decision points in the same direction.
      </p>

      <TextInput
        label="Sponsor target"
        name="goal_sponsor_target"
        value={data.goal_sponsor_target}
        onChange={onChange}
        placeholder="Number of sponsors Atlas should aim to close. Atlas recommends 6."
        required
        error={errors.goal_sponsor_target}
      />
      <TextInput
        label="Delegate registration target"
        name="goal_delegate_target"
        value={data.goal_delegate_target}
        onChange={onChange}
        placeholder="Registered delegate target. Atlas recommends 500 to 600."
        required
        error={errors.goal_delegate_target}
      />
      <TextInput
        label="Earned media mentions target"
        name="goal_media_mentions_target"
        value={data.goal_media_mentions_target}
        onChange={onChange}
        placeholder="Target number of earned media mentions"
        error={errors.goal_media_mentions_target}
      />
      <TextInput
        label="LinkedIn follower growth target"
        name="goal_linkedin_follower_growth"
        value={data.goal_linkedin_follower_growth}
        onChange={onChange}
        placeholder="Target LinkedIn follower growth for MIS 2026 page"
        error={errors.goal_linkedin_follower_growth}
      />
      <RadioGroup
        label="Primary success metric"
        name="goal_primary_success_metric"
        options={[
          'Sponsor revenue secured',
          'Delegate registrations',
          'Government and ministerial presence',
          'Media and public visibility',
          'Long-term network and pipeline for MIS 2027',
        ]}
        allowOther
        value={data.goal_primary_success_metric}
        onChange={onChange}
        required
        error={errors.goal_primary_success_metric}
      />
      <TextArea
        label="Biggest risk"
        name="goal_biggest_risk"
        value={data.goal_biggest_risk}
        onChange={onChange}
        rows={3}
        placeholder="What is the single biggest risk to MIS 2026 succeeding, in your view?"
        required
        error={errors.goal_biggest_risk}
      />
      <TextArea
        label="Post-event vision"
        name="goal_post_event_vision"
        value={data.goal_post_event_vision}
        onChange={onChange}
        rows={4}
        placeholder="What does success look like on 23 July, the day after the summit ends?"
        required
        error={errors.goal_post_event_vision}
      />
      <TextArea
        label="Three to five year transformation plan"
        name="goal_three_year_plan_notes"
        value={data.goal_three_year_plan_notes}
        onChange={onChange}
        rows={4}
        placeholder="Brief summary of the three-to-five-year transformation plan and how MIS 2026 feeds it"
        error={errors.goal_three_year_plan_notes}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
