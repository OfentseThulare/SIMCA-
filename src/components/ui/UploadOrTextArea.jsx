import { useState, useRef } from 'react'
import { supabase } from '../../lib/supabase'

const MAX_SIZE = 50 * 1024 * 1024
const ACCEPTED = '.pdf,.png,.jpg,.jpeg,.svg,.doc,.docx,.xlsx,.csv,.txt,.md'

export default function UploadOrTextArea({
  label,
  textFieldName,
  uploadFieldName,
  data,
  onChange,
  placeholder,
  rows = 3,
  required,
  error,
}) {
  const textValue = data?.[textFieldName] || ''
  const uploadValue = data?.[uploadFieldName] || ''

  const [mode, setMode] = useState(() => (uploadValue && !textValue ? 'upload' : 'text'))
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const uploadFilename = uploadValue ? decodeURIComponent(uploadValue.split('/').pop() || '') : ''

  const handleFile = async (file) => {
    if (!file) return
    if (file.size > MAX_SIZE) {
      alert('File exceeds the 50 MB limit.')
      return
    }
    if (!supabase) {
      alert('Upload is not available. Please contact Atlas directly at hello@atlascg.co.za')
      return
    }

    setUploading(true)
    try {
      const safeName = file.name.replace(/\s+/g, '-')
      const fileName = `${textFieldName}-${Date.now()}-${safeName}`
      const { error: uploadError } = await supabase.storage
        .from('mis2026-onboarding-assets')
        .upload(fileName, file)

      if (uploadError) {
        console.error('Upload error:', uploadError)
        alert(`Upload failed: ${uploadError.message}`)
        return
      }

      const { data: urlData } = supabase.storage
        .from('mis2026-onboarding-assets')
        .getPublicUrl(fileName)

      onChange({ target: { name: uploadFieldName, value: urlData?.publicUrl || '' } })
    } catch (err) {
      console.error('Unexpected upload error:', err)
      alert(`Upload failed: ${err.message}`)
    } finally {
      setUploading(false)
    }
  }

  const handleRemoveUpload = () => {
    onChange({ target: { name: uploadFieldName, value: '' } })
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between gap-3 mb-3">
        <label
          htmlFor={textFieldName}
          className="block text-[13px] font-semibold text-atlas-dark/45 uppercase tracking-[0.08em]"
        >
          {label}
          {required && <span className="text-atlas-red ml-1" aria-hidden="true">*</span>}
        </label>

        <div
          role="tablist"
          aria-label={`${label} input mode`}
          className="inline-flex rounded-lg bg-atlas-cream/80 border border-black/[0.05] p-0.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'text'}
            onClick={() => setMode('text')}
            className={`px-3 py-1.5 rounded-md text-[11px] font-bold tracking-[0.05em] uppercase transition-colors duration-150 ${
              mode === 'text'
                ? 'bg-white text-atlas-dark shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
                : 'text-atlas-dark/40 hover:text-atlas-dark/70'
            }`}
          >
            Type response
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'upload'}
            onClick={() => setMode('upload')}
            className={`px-3 py-1.5 rounded-md text-[11px] font-bold tracking-[0.05em] uppercase transition-colors duration-150 ${
              mode === 'upload'
                ? 'bg-white text-atlas-dark shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
                : 'text-atlas-dark/40 hover:text-atlas-dark/70'
            }`}
          >
            Upload document
          </button>
        </div>
      </div>

      {mode === 'text' ? (
        <>
          <textarea
            id={textFieldName}
            name={textFieldName}
            value={textValue}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            aria-required={required}
            aria-invalid={error ? 'true' : 'false'}
            className="w-full px-0 py-3 border-0 border-b-2 border-black/[0.08] text-[16px] md:text-[17px] text-atlas-dark placeholder-atlas-dark/20 bg-transparent transition-colors duration-200 focus:border-atlas-red focus:ring-0 leading-relaxed resize-none"
          />
          {uploadValue && (
            <div className="mt-2.5 flex items-center gap-2 text-[12px] text-atlas-dark/30 italic">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L21 12m0 0l-5.25-5.25M21 12H3" />
              </svg>
              <span>A document was uploaded previously. Switch to Upload document to view or replace.</span>
            </div>
          )}
        </>
      ) : (
        <div>
          {uploadValue ? (
            <div className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-black/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <svg className="h-5 w-5 text-atlas-red/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <div className="flex-1 min-w-0">
                <a
                  href={uploadValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-semibold text-atlas-dark hover:text-atlas-red truncate block"
                >
                  {uploadFilename}
                </a>
                <p className="text-[12px] text-atlas-dark/30 mt-0.5">Uploaded</p>
              </div>
              <button
                type="button"
                onClick={handleRemoveUpload}
                aria-label="Remove uploaded file"
                className="text-atlas-dark/20 hover:text-atlas-red transition-colors duration-150 p-1.5 rounded-lg hover:bg-atlas-red/[0.04]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              aria-label={`Upload a document for ${label}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click() } }}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${
                dragOver
                  ? 'border-atlas-red/30 bg-atlas-red/[0.02]'
                  : 'border-black/[0.08] hover:border-atlas-red/20 hover:bg-atlas-cream'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED}
                onChange={(e) => handleFile(e.target.files?.[0])}
                className="hidden"
                tabIndex={-1}
              />
              {uploading ? (
                <div>
                  <div className="w-5 h-5 mx-auto mb-2.5 border-2 border-atlas-red/20 border-t-atlas-red rounded-full animate-spin" />
                  <p className="text-[13px] font-medium text-atlas-dark/50">Uploading...</p>
                </div>
              ) : (
                <>
                  <p className="text-[14px] font-semibold text-atlas-dark/50">
                    Drop a file here or click to browse
                  </p>
                  <p className="text-[12px] text-atlas-dark/30 mt-1.5">
                    PDF, DOCX, XLSX, CSV, images &mdash; max 50&nbsp;MB
                  </p>
                </>
              )}
            </div>
          )}

          {textValue && (
            <div className="mt-2.5 flex items-center gap-2 text-[12px] text-atlas-dark/30 italic">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75L3 12m0 0l5.25-5.25M3 12h18" />
              </svg>
              <span>A typed response exists. Switch to Type response to view or edit.</span>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="mt-2.5 text-[13px] font-medium text-atlas-red" role="alert">{error}</p>
      )}
    </div>
  )
}
