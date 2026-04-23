import SliderCard from '../ui/SliderCard'
import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
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
      <UploadOrTextArea
        label="Primary brand colours"
        textFieldName="brand_primary_colours"
        uploadFieldName="brand_primary_colours_upload"
        data={data}
        onChange={onChange}
        rows={2}
        placeholder="Provide hex codes or Pantone references, or upload a colour palette document. Example: Primary #0B5134, Gold #D4AF37"
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
      <UploadOrTextArea
        label="Brand voice words"
        textFieldName="brand_voice_words"
        uploadFieldName="brand_voice_words_upload"
        data={data}
        onChange={onChange}
        rows={2}
        placeholder="Three to five adjectives that describe how SAMCA sounds, or upload a voice guide"
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
      <UploadOrTextArea
        label="Brand dos"
        textFieldName="brand_dos"
        uploadFieldName="brand_dos_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="What we always do when representing SAMCA, or upload a do/don't reference"
        error={errors.brand_dos}
      />
      <UploadOrTextArea
        label="Brand don'ts"
        textFieldName="brand_donts"
        uploadFieldName="brand_donts_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="What we never do when representing SAMCA"
        error={errors.brand_donts}
      />
      <UploadOrTextArea
        label="Sample communications"
        textFieldName="brand_sample_content"
        uploadFieldName="brand_sample_content_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Three to five examples of written communications, speeches, or decks that represent how SAMCA sounds. You can paste examples or upload documents."
        error={errors.brand_sample_content}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
