export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/[0.05]">
      <div className="flex justify-between items-center px-6 md:px-8 py-3.5">
        <span
          className="text-[11px] font-bold tracking-[0.15em] uppercase text-atlas-dark/35"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          MIS 2026 Onboarding
        </span>
        <span
          className="text-[11px] font-semibold text-atlas-dark/35"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {percentage}%
        </span>
      </div>
      <div className="h-[2px] bg-black/[0.04]">
        <div
          className="h-full bg-atlas-red transition-[width] duration-700 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Form completion progress"
        />
      </div>
    </div>
  )
}
