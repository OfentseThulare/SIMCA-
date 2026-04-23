import SliderCard from '../ui/SliderCard'
import NavigationButtons from '../ui/NavigationButtons'

export default function ThankYouSlide({ onBack, onSubmit, isSubmitting, isSubmitted }) {
  if (isSubmitted) {
    return (
      <SliderCard>
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-7">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold text-atlas-dark mb-5"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Thank you
          </h2>
          <p className="text-[15px] text-atlas-dark/45 leading-relaxed max-w-md mx-auto mb-5" style={{ textWrap: 'balance' }}>
            Your onboarding is submitted. Atlas has been notified and will come back to you within 24 hours with the credential handover link, the shared project space, and the first working session diary invite.
          </p>
          <p className="text-[14px] text-atlas-dark/35 leading-relaxed max-w-md mx-auto" style={{ textWrap: 'balance' }}>
            If you need to update anything before our first working session, email{' '}
            <a href="mailto:info@atlascg.co.za" className="text-atlas-red font-semibold hover:underline">
              info@atlascg.co.za
            </a>{' '}
            with the subject line <strong>MIS 2026 onboarding update</strong>.
          </p>
          <p className="text-[13px] text-atlas-dark/25 mt-8">We are looking forward to building this with you.</p>
        </div>
      </SliderCard>
    )
  }

  return (
    <SliderCard>
      <div className="text-center py-10">
        <div className="w-12 h-[3px] bg-atlas-red rounded-full mx-auto mb-8" />

        <h2
          className="text-2xl md:text-3xl font-bold text-atlas-dark mb-4"
          style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
        >
          Ready to submit
        </h2>
        <p className="text-[15px] text-atlas-dark/45 leading-relaxed mb-4 max-w-sm mx-auto" style={{ textWrap: 'balance' }}>
          Once submitted, Atlas will review your responses and be in touch within 24 hours with next steps, the credential handover link, and the first working session invite.
        </p>
        <p className="text-[14px] text-atlas-dark/35 leading-relaxed max-w-sm mx-auto" style={{ textWrap: 'balance' }}>
          Need to update anything after submitting? Email{' '}
          <a href="mailto:info@atlascg.co.za" className="text-atlas-red font-semibold hover:underline">
            info@atlascg.co.za
          </a>{' '}
          with the subject line <strong>MIS 2026 onboarding update</strong>.
        </p>
      </div>
      <NavigationButtons
        onBack={onBack}
        onNext={onSubmit}
        nextLabel="Submit"
        isSubmitting={isSubmitting}
      />
    </SliderCard>
  )
}
