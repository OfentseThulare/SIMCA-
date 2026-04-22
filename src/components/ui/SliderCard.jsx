export default function SliderCard({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-3xl p-8 md:p-14 w-full max-w-2xl mx-auto shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_40px_rgba(0,0,0,0.03)] border border-black/[0.04] ${className}`}>
      {children}
    </div>
  )
}
