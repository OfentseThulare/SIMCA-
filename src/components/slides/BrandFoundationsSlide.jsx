import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function BrandFoundationsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Brand foundations
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        The visual and tonal brand system Atlas will apply across every deliverable for MIS 2026.
      </p>

      <TextArea
        label="Logo notes"
        name="brand_logo_note"
        value={data.brand_logo_note}
        onChange={onChange}
        rows={2}
        placeholder="Tell us which logo variations you have. You will upload the files in the Assets section later."
        error={errors.brand_logo_note}
      />
      <TextArea
        label="Primary brand colours"
        name="brand_primary_colours"
        value={data.brand_primary_colours}
        onChange={onChange}
        rows={2}
        placeholder="Provide hex codes or Pantone references. Example: Primary #0B5134, Gold #D4AF37"
        required
        error={errors.brand_primary_colours}
      />
      <TextArea
        label="Secondary brand colours"
        name="brand_secondary_colours"
        value={data.brand_secondary_colours}
        onChange={onChange}
        rows={2}
        error={errors.brand_secondary_colours}
      />
      <TextInput
        label="Typography"
        name="brand_typography"
        value={data.brand_typography}
        onChange={onChange}
        placeholder="Primary and secondary fonts, e.g. Poppins and Lora"
        error={errors.brand_typography}
      />
      <RadioGroup
        label="Brand tone"
        name="brand_tone"
        options={[
          'Formal and authoritative',
          'Warm and community-led',
          'Bold and challenger',
          'Diplomatic and statesmanlike',
        ]}
        allowOther
        value={data.brand_tone}
        onChange={onChange}
        required
        error={errors.brand_tone}
      />
      <TextArea
        label="Brand voice words"
        name="brand_voice_words"
        value={data.brand_voice_words}
        onChange={onChange}
        rows={2}
        placeholder="Three to five adjectives that describe how SAMCA sounds"
        error={errors.brand_voice_words}
      />
      <RadioGroup
        label="Brand guidelines"
        name="brand_guidelines_exist"
        options={[
          'Yes, full brand guidelines document',
          'Partial, logo and colours only',
          'No formal guidelines',
        ]}
        value={data.brand_guidelines_exist}
        onChange={onChange}
        required
        error={errors.brand_guidelines_exist}
      />
      <TextArea
        label="Brand dos"
        name="brand_dos"
        value={data.brand_dos}
        onChange={onChange}
        rows={3}
        placeholder="What we always do when representing SAMCA"
        error={errors.brand_dos}
      />
      <TextArea
        label="Brand don'ts"
        name="brand_donts"
        value={data.brand_donts}
        onChange={onChange}
        rows={3}
        placeholder="What we never do when representing SAMCA"
        error={errors.brand_donts}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
