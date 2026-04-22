export default function TextInput({ label, name, value, onChange, placeholder, type = 'text', required, error }) {
  const autoCompleteMap = {
    primary_contact_full_name: 'name',
    primary_contact_email: 'email',
    primary_contact_phone: 'tel',
    samca_billing_contact_email: 'email',
  }

  return (
    <div className="mb-8">
      <label
        htmlFor={name}
        className="block text-[13px] font-semibold text-atlas-dark/45 uppercase tracking-[0.08em] mb-3"
      >
        {label}
        {required && <span className="text-atlas-red ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder || undefined}
        autoComplete={autoCompleteMap[name] || 'off'}
        spellCheck={type === 'email' || type === 'tel' ? false : undefined}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full px-0 py-3.5 border-b-2 text-[16px] text-atlas-dark placeholder-atlas-dark/20 bg-transparent transition-colors duration-200 focus:border-atlas-red ${
          error ? 'border-atlas-red/50' : 'border-black/[0.08] hover:border-black/20'
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
