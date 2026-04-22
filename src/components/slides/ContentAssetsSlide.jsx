import SliderCard from '../ui/SliderCard'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function ContentAssetsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Content and narrative assets
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Existing media inventory and the approval workflow Atlas will operate within.
      </p>

      <RadioGroup
        label="Existing video library"
        name="content_existing_video"
        options={['Yes, significant library', 'Some footage available', 'Minimal or none']}
        value={data.content_existing_video}
        onChange={onChange}
        required
        error={errors.content_existing_video}
      />
      <RadioGroup
        label="Existing photography library"
        name="content_existing_photography"
        options={['Yes, significant library', 'Some photography available', 'Minimal or none']}
        value={data.content_existing_photography}
        onChange={onChange}
        required
        error={errors.content_existing_photography}
      />
      <RadioGroup
        label="Fireside Conversation recordings"
        name="content_fireside_recordings"
        options={[
          'Yes, recorded and available',
          'Recorded but not yet shared',
          'Planned but not yet recorded',
          'None planned',
        ]}
        value={data.content_fireside_recordings}
        onChange={onChange}
        error={errors.content_fireside_recordings}
      />
      <TextArea
        label="Fireside Conversation themes and speakers"
        name="content_fireside_themes"
        value={data.content_fireside_themes}
        onChange={onChange}
        rows={4}
        placeholder="Themes and speakers from past or upcoming Fireside Conversations"
        error={errors.content_fireside_themes}
      />
      <TextArea
        label="Existing testimonials"
        name="content_testimonials"
        value={data.content_testimonials}
        onChange={onChange}
        rows={3}
        placeholder="Existing quotes or testimonials from prior MIS editions, partners, or community stakeholders"
        error={errors.content_testimonials}
      />
      <TextArea
        label="Case studies"
        name="content_case_studies"
        value={data.content_case_studies}
        onChange={onChange}
        rows={4}
        placeholder="Any existing case studies: wastewater refurbishment, community health, enterprise development, etc."
        error={errors.content_case_studies}
      />
      <RadioGroup
        label="Licensed footage"
        name="content_licensed_footage"
        options={['Yes, SAMCA has licensing agreements', 'Need to negotiate', 'Not relevant']}
        value={data.content_licensed_footage}
        onChange={onChange}
        error={errors.content_licensed_footage}
      />
      <TextArea
        label="Content approval workflow"
        name="content_approval_workflow"
        value={data.content_approval_workflow}
        onChange={onChange}
        rows={4}
        placeholder="Who approves content before publishing? What is the expected turnaround? Example: Primary contact approves within 24 hours, CEO for pillar posts within 48 hours."
        required
        error={errors.content_approval_workflow}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
