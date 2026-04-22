import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
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
      <TextArea
        label="Pillar notes and refinements"
        name="event_pillar_notes"
        value={data.event_pillar_notes}
        onChange={onChange}
        rows={4}
        placeholder="Add any refinements, context, or pillar-specific objectives"
        error={errors.event_pillar_notes}
      />
      <TextArea
        label="Narrative themes"
        name="event_narrative_themes"
        value={data.event_narrative_themes}
        onChange={onChange}
        rows={3}
        placeholder="Sustainability, Harmony, Accountability, Transformation — confirm or amend"
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
      <TextArea
        label="Hero message"
        name="event_hero_message"
        value={data.event_hero_message}
        onChange={onChange}
        rows={3}
        placeholder="In one paragraph, what is the single most important thing an attendee should walk away understanding?"
        required
        error={errors.event_hero_message}
      />
      <TextArea
        label="Differentiation"
        name="event_differentiation"
        value={data.event_differentiation}
        onChange={onChange}
        rows={3}
        placeholder="How is MIS 2026 distinct from Mining Indaba, Joburg Indaba, and other SA mining events?"
        required
        error={errors.event_differentiation}
      />
      <TextArea
        label="Restricted topics"
        name="event_restricted_topics"
        value={data.event_restricted_topics}
        onChange={onChange}
        rows={3}
        placeholder="Any topics, political positions, or commercial matters we should not touch in public content"
        error={errors.event_restricted_topics}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
