import { useState, useRef } from 'react'
import { supabase } from '../../lib/supabase'

const ACCEPTED_TYPES = '.pdf,.png,.jpg,.jpeg,.svg,.doc,.docx,.xlsx,.csv,.mp4,.mov'
const MAX_SIZE = 50 * 1024 * 1024
const CATEGORIES = [
  'Logo',
  'Brand Guidelines',
  'Company Profile',
  'Sponsor Prospectus (existing)',
  'Sponsor Target List (CSV/XLSX)',
  'Delegate List (CSV/XLSX)',
  'Speaker List (CSV/XLSX)',
  'Media Contact List (CSV/XLSX)',
  'Photography',
  'Video Footage',
  'Testimonials or Case Studies',
  'Past Event Collateral',
  'Government Endorsement Letter',
  'Other',
]

export default function FileUpload({ files, onFilesChange }) {
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const handleFiles = async (fileList) => {
    if (!fileList || fileList.length === 0) return

    const newFiles = Array.from(fileList)
    const validFiles = newFiles.filter(f => f.size <= MAX_SIZE)

    if (validFiles.length !== newFiles.length) {
      alert('Some files exceeded the 50 MB limit and were skipped.')
    }

    if (validFiles.length === 0) return

    if (!supabase) {
      alert('File upload is not available. Please contact Atlas directly at hello@atlasconsultinggroup.co.za')
      return
    }

    setUploading(true)
    const uploaded = []

    for (const file of validFiles) {
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
      const { error } = await supabase.storage
        .from('mis2026-onboarding-assets')
        .upload(fileName, file)

      if (error) {
        console.error('Upload error:', error)
        continue
      }

      const { data: urlData } = supabase.storage
        .from('mis2026-onboarding-assets')
        .getPublicUrl(fileName)

      uploaded.push({
        filename: file.name,
        url: urlData?.publicUrl || '',
        category: 'Other',
        size: file.size,
      })
    }

    onFilesChange([...files, ...uploaded])
    setUploading(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  const handleCategoryChange = (index, category) => {
    const updated = [...files]
    updated[index] = { ...updated[index], category }
    onFilesChange(updated)
  }

  const handleRemove = (index) => {
    const updated = files.filter((_, i) => i !== index)
    onFilesChange(updated)
  }

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="mb-8">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label="Upload files by clicking or dragging"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click() } }}
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
          dragOver
            ? 'border-atlas-red/30 bg-atlas-red/[0.02]'
            : 'border-black/[0.08] hover:border-atlas-red/20 hover:bg-atlas-cream'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPTED_TYPES}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          tabIndex={-1}
        />
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-atlas-red/[0.06] flex items-center justify-center">
          <svg className="h-6 w-6 text-atlas-red/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        {uploading ? (
          <div>
            <div className="w-6 h-6 mx-auto mb-3 border-2 border-atlas-red/20 border-t-atlas-red rounded-full animate-spin" />
            <p className="text-[14px] font-medium text-atlas-dark/50">Uploading...</p>
          </div>
        ) : (
          <>
            <p className="text-[15px] font-semibold text-atlas-dark/50">
              Drop files here or click to browse
            </p>
            <p className="text-[13px] text-atlas-dark/30 mt-2">
              PDF, PNG, JPG, SVG, DOC, DOCX, XLSX, CSV, MP4, MOV &mdash; Max 50&nbsp;MB per file
            </p>
          </>
        )}
      </div>

      {files.length > 0 && (
        <div className="mt-5 space-y-2.5">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-black/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-atlas-dark truncate">{file.filename}</p>
                <p className="text-[12px] text-atlas-dark/30 mt-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{formatSize(file.size)}</p>
              </div>
              <select
                value={file.category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                aria-label={`Category for ${file.filename}`}
                className="text-[12px] font-semibold border border-black/[0.08] rounded-lg px-3 py-2 text-atlas-dark/50 bg-atlas-cream/60"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                aria-label={`Remove ${file.filename}`}
                className="text-atlas-dark/20 hover:text-atlas-red transition-colors duration-150 p-1.5 rounded-lg hover:bg-atlas-red/[0.04]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
