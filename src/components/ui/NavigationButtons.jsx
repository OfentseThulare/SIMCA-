export default function NavigationButtons({ onBack, onNext, nextLabel = 'Continue', showBack = true, isSubmitting = false }) {
  return (
    <div className="flex items-center gap-4 mt-12 pt-8 border-t border-black/[0.04]">
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back to previous section"
          className="px-6 py-3.5 rounded-xl text-atlas-dark/40 font-semibold text-[14px] tracking-wide hover:text-atlas-dark hover:bg-atlas-cream transition-colors duration-150"
        >
          Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={isSubmitting}
        className="px-10 py-3.5 rounded-xl bg-atlas-red text-white font-bold text-[14px] tracking-wide hover:bg-atlas-red/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2.5 shadow-[0_1px_3px_rgba(230,57,70,0.2)]"
      >
        {isSubmitting && (
          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {isSubmitting ? 'Submitting...' : nextLabel}
      </button>
    </div>
  )
}
