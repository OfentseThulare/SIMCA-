import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function GoalsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Success markers
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        This section records what SAMCA considers success for MIS 2026. These are SAMCA's internal targets, not commitments by Atlas. Atlas's role is to build the digital infrastructure, run the owned media, generate qualified leads, and garner public attention. Conversion of leads to sponsors and registered delegates is SAMCA's responsibility, handled by SAMCA's business development and operations team.
      </p>

      <TextInput
        label="Sponsor commitments target"
        name="goal_sponsor_target"
        value={data.goal_sponsor_target}
        onChange={onChange}
        placeholder="How many sponsor commitments does SAMCA aim to secure by 31 May? Atlas will build the pipeline; closing is handled by SAMCA."
        required
        error={errors.goal_sponsor_target}
      />
      <TextInput
        label="Delegate registration target"
        name="goal_delegate_target"
        value={data.goal_delegate_target}
        onChange={onChange}
        placeholder="Delegate registration target. Atlas will drive awareness and qualified traffic to registration; registration conversion is handled by SAMCA via Quicket."
        required
        error={errors.goal_delegate_target}
      />
      <TextInput
        label="Earned media mentions target"
        name="goal_media_mentions_target"
        value={data.goal_media_mentions_target}
        onChange={onChange}
        placeholder="SAMCA-side target. Earned media is managed by SAMCA's PR partner, not Atlas."
        error={errors.goal_media_mentions_target}
      />
      <TextInput
        label="LinkedIn follower growth target"
        name="goal_linkedin_follower_growth"
        value={data.goal_linkedin_follower_growth}
        onChange={onChange}
        placeholder="Directional target only. Follower growth is driven by content performance and paid media spend which SAMCA funds directly."
        error={errors.goal_linkedin_follower_growth}
      />
      <RadioGroup
        label="SAMCA's primary definition of success"
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
      <UploadOrTextArea
        label="Three to five year transformation plan"
        textFieldName="goal_three_year_plan_notes"
        uploadFieldName="goal_three_year_plan_notes_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Brief summary of the three-to-five-year transformation plan and how MIS 2026 feeds it, or upload the plan document"
        error={errors.goal_three_year_plan_notes}
      />

      <p className="text-[12px] text-atlas-dark/35 leading-relaxed mt-2 italic" style={{ textWrap: 'balance' }}>
        These targets are recorded for planning purposes only. Atlas's obligations to SAMCA are set out exclusively in the Service Level Agreement and its Schedules. No target recorded here creates any service-level commitment by Atlas.
      </p>

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
