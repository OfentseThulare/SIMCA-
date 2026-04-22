export default function TextArea({ label, name, value, onChange, placeholder, required, error, rows = 3 }) {
  return (
    <div className="mb-8">
      <label
        htmlFor={name}
        className="block text-[13px] font-semibold text-atlas-dark/45 uppercase tracking-[0.08em] mb-3"
      >
        {label}
        {required && <span className="text-atlas-red ml-1" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder || undefined}
        rows={rows}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full px-4 py-4 border-2 rounded-xl text-[16px] text-atlas-dark placeholder-atlas-dark/20 bg-atlas-cream/60 transition-colors duration-200 focus:bg-white focus:border-atlas-red/40 focus:ring-2 focus:ring-atlas-red/8 resize-y ${
          error ? 'border-atlas-red/50' : 'border-black/[0.06] hover:border-black/[0.12]'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2.5 text-[13px] font-medium text-atlas-red" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
