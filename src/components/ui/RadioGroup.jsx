import { useState } from 'react'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function RadioGroup({ label, name, options, value, onChange, required, error, allowOther = false }) {
  const [otherText, setOtherText] = useState('')
  const isOtherSelected = value && !options.includes(value) && value !== ''

  const handleChange = (option) => {
    if (option === '__other__') {
      onChange({ target: { name, value: otherText || '' } })
    } else {
      onChange({ target: { name, value: option } })
      setOtherText('')
    }
  }

  const handleOtherText = (e) => {
    setOtherText(e.target.value)
    onChange({ target: { name, value: e.target.value } })
  }

  return (
    <div className="mb-8" role="radiogroup" aria-labelledby={`${name}-label`}>
      <label id={`${name}-label`} className="block text-[13px] font-semibold text-atlas-dark/45 uppercase tracking-[0.08em] mb-3.5">
        {label}
        {required && <span className="text-atlas-red ml-1" aria-hidden="true">*</span>}
      </label>
      <div className="space-y-2.5">
        {options.map((option, i) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={value === option}
            onClick={() => handleChange(option)}
            className={`w-full flex items-center gap-4 cursor-pointer px-5 py-4 rounded-xl border-2 transition-all duration-150 text-left ${
              value === option
                ? 'bg-atlas-red/[0.04] border-atlas-red/25 shadow-sm'
                : 'bg-atlas-cream/50 border-transparent hover:border-black/[0.06] hover:bg-atlas-cream'
            }`}
          >
            <span className={`w-8 h-8 rounded-lg text-[12px] font-bold flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-150 ${
              value === option
                ? 'bg-atlas-red text-white border-atlas-red'
                : 'bg-white text-atlas-dark/30 border-black/[0.1]'
            }`}>
              {LETTERS[i]}
            </span>
            <span className={`text-[15px] leading-snug ${value === option ? 'text-atlas-dark font-semibold' : 'text-atlas-dark/60'}`}>
              {option}
            </span>
          </button>
        ))}
        {allowOther && (
          <div>
            <button
              type="button"
              role="radio"
              aria-checked={isOtherSelected}
              onClick={() => handleChange('__other__')}
              className={`w-full flex items-center gap-4 cursor-pointer px-5 py-4 rounded-xl border-2 transition-all duration-150 text-left ${
                isOtherSelected
                  ? 'bg-atlas-red/[0.04] border-atlas-red/25 shadow-sm'
                  : 'bg-atlas-cream/50 border-transparent hover:border-black/[0.06] hover:bg-atlas-cream'
              }`}
            >
              <span className={`w-8 h-8 rounded-lg text-[12px] font-bold flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-150 ${
                isOtherSelected
                  ? 'bg-atlas-red text-white border-atlas-red'
                  : 'bg-white text-atlas-dark/30 border-black/[0.1]'
              }`}>
                {LETTERS[options.length]}
              </span>
              <span className={`text-[15px] ${isOtherSelected ? 'text-atlas-dark font-semibold' : 'text-atlas-dark/60'}`}>
                Other
              </span>
            </button>
            {isOtherSelected && (
              <input
                type="text"
                value={otherText || value}
                onChange={handleOtherText}
                placeholder="Please specify"
                aria-label="Specify other option"
                className="mt-2.5 ml-12 w-[calc(100%-3rem)] px-0 py-3 border-b-2 border-black/[0.08] text-[15px] text-atlas-dark placeholder-atlas-dark/20 bg-transparent transition-colors duration-200 focus:border-atlas-red"
              />
            )}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2.5 text-[13px] font-medium text-atlas-red" role="alert">{error}</p>
      )}
    </div>
  )
}
