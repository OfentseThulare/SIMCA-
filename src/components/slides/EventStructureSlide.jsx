import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function EventStructureSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        MIS 2026 event structure
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Confirms the pillars, themes, and narrative architecture that will drive every content decision.
      </p>

      <RadioGroup
        label="Three pillars status"
        name="event_three_pillars_confirmed"
        options={[
          'Yes, pillars are final',
          'Yes, but subject to minor refinement',
          'No, still in development',
        ]}
        value={data.event_three_pillars_confirmed}
        onChange={onChange}
        required
        error={errors.event_three_pillars_confirmed}
      />
      <UploadOrTextArea
        label="Pillar notes and refinements"
        textFieldName="event_pillar_notes"
        uploadFieldName="event_pillar_notes_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Add any refinements, context, or pillar-specific objectives, or upload a pillar brief"
        error={errors.event_pillar_notes}
      />
      <UploadOrTextArea
        label="Narrative themes"
        textFieldName="event_narrative_themes"
        uploadFieldName="event_narrative_themes_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Sustainability, Harmony, Accountability, Transformation — confirm or amend, or upload"
        required
        error={errors.event_narrative_themes}
      />
      <TextInput
        label="Day 1 theme"
        name="event_day1_theme"
        value={data.event_day1_theme}
        onChange={onChange}
        placeholder="Governance, policy, infrastructure"
        error={errors.event_day1_theme}
      />
      <TextInput
        label="Day 2 theme"
        name="event_day2_theme"
        value={data.event_day2_theme}
        onChange={onChange}
        placeholder="Industry, enterprise, gala"
        error={errors.event_day2_theme}
      />
      <TextInput
        label="Day 3 theme"
        name="event_day3_theme"
        value={data.event_day3_theme}
        onChange={onChange}
        placeholder="Mayoral Golf Day and closing"
        error={errors.event_day3_theme}
      />
      <UploadOrTextArea
        label="Hero message"
        textFieldName="event_hero_message"
        uploadFieldName="event_hero_message_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="In one paragraph, what is the single most important thing an attendee should walk away understanding?"
        required
        error={errors.event_hero_message}
      />
      <UploadOrTextArea
        label="Differentiation"
        textFieldName="event_differentiation"
        uploadFieldName="event_differentiation_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="How is MIS 2026 distinct from Mining Indaba, Joburg Indaba, and other SA mining events?"
        required
        error={errors.event_differentiation}
      />
      <UploadOrTextArea
        label="Restricted topics"
        textFieldName="event_restricted_topics"
        uploadFieldName="event_restricted_topics_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Any topics, political positions, or commercial matters we should not touch in public content"
        error={errors.event_restricted_topics}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
