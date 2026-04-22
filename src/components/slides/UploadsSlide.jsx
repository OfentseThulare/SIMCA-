import SliderCard from '../ui/SliderCard'
import TextArea from '../ui/TextArea'
import FileUpload from '../ui/FileUpload'
import NavigationButtons from '../ui/NavigationButtons'

export default function UploadsSlide({ data, onChange, onNext, onBack, errors, uploadedFiles, onFilesChange }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Asset uploads
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Upload logos, brand files, lists, photography, endorsement letters, and any other assets. Nothing is required here — you can send files after this form if easier.
      </p>

      <FileUpload files={uploadedFiles} onFilesChange={onFilesChange} />

      <TextArea
        label="Asset notes"
        name="asset_notes"
        value={data.asset_notes}
        onChange={onChange}
        rows={3}
        placeholder="Anything Atlas should know about the assets you have uploaded, or large files you will share via external link"
        error={errors.asset_notes}
      />
      <TextArea
        label="External asset links"
        name="asset_external_links"
        value={data.asset_external_links}
        onChange={onChange}
        rows={4}
        placeholder="Google Drive, Dropbox, or WeTransfer links to large files (video, photography libraries)"
        error={errors.asset_external_links}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
