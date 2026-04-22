import SliderCard from '../ui/SliderCard'

export default function WelcomeSlide({ onNext }) {
  return (
    <SliderCard>
      <div className="text-center py-10 md:py-16">
        <div className="w-12 h-[3px] bg-atlas-red rounded-full mx-auto mb-8" />

        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-atlas-dark/35 mb-5" style={{ fontFamily: 'var(--font-display)' }}>
          SAMCA
        </p>

        <h1
          className="text-3xl md:text-[44px] font-extrabold text-atlas-dark leading-[1.1] mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
        >
          Welcome to Atlas
        </h1>

        <p className="text-[18px] font-semibold text-atlas-dark/40 mb-10" style={{ fontFamily: 'var(--font-display)' }}>
          Mining Integration Summit 2026
        </p>

        <p className="text-[15px] text-atlas-dark/55 leading-relaxed mb-4 max-w-md mx-auto" style={{ textWrap: 'balance' }}>
          This onboarding form is how we gather every asset, credential, contact, and strategic input Atlas needs to deliver MIS 2026. It is the single most important preparation step we will do together.
        </p>

        <p className="text-[14px] text-atlas-dark/35 leading-relaxed mb-14 max-w-md mx-auto" style={{ textWrap: 'balance' }}>
          The form is long by design. It does not need to be completed in one sitting. Your progress saves automatically, and different sections can be filled by different members of your team. If any information is not to hand, skip it and we will follow up by email.
        </p>

        <button
          type="button"
          onClick={onNext}
          className="px-12 py-4 rounded-xl bg-atlas-red text-white font-bold text-[15px] tracking-wide hover:bg-atlas-red/90 active:scale-[0.98] transition-all duration-150 shadow-[0_2px_8px_rgba(230,57,70,0.25)]"
        >
          Get Started
        </button>
        <p className="text-[13px] text-atlas-dark/25 mt-5" style={{ fontVariantNumeric: 'tabular-nums' }}>
          Estimated time: 25 to 40 minutes
        </p>
      </div>
    </SliderCard>
  )
}
