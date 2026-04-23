import SliderCard from '../ui/SliderCard'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function POPIAConsentSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Consent declarations
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Atlas's automation architecture is built on a consent-first, POPIA-compliant foundation. The following declarations confirm SAMCA's understanding of how personal data flows through the system.
      </p>

      <RadioGroup
        label="POPIA consent architecture acknowledged"
        name="consent_popia_architecture_acknowledged"
        options={[
          'Yes, I acknowledge that Atlas’s outreach sequences fire only after explicit recipient opt-in, and that this is a hard system rule.',
        ]}
        value={data.consent_popia_architecture_acknowledged}
        onChange={onChange}
        required
        error={errors.consent_popia_architecture_acknowledged}
      />
      <RadioGroup
        label="One unsolicited email rule"
        name="consent_one_unsolicited_email"
        options={[
          'Yes, I acknowledge that only one unsolicited email per prospect is permitted, containing no commercial offer.',
        ]}
        value={data.consent_one_unsolicited_email}
        onChange={onChange}
        required
        error={errors.consent_one_unsolicited_email}
      />
      <RadioGroup
        label="Opt-out propagation"
        name="consent_opt_out_propagation"
        options={[
          'Yes, I acknowledge that opt-outs propagate across all connected systems within 60 seconds.',
        ]}
        value={data.consent_opt_out_propagation}
        onChange={onChange}
        required
        error={errors.consent_opt_out_propagation}
      />
      <RadioGroup
        label="Minor data handling (Schools Programme)"
        name="consent_minor_data_handling"
        options={[
          'Yes, I acknowledge that no learner under 18 will have personal data processed without confirmed guardian consent.',
        ]}
        value={data.consent_minor_data_handling}
        onChange={onChange}
        required
        error={errors.consent_minor_data_handling}
      />
      <RadioGroup
        label="Data ownership"
        name="consent_data_ownership"
        options={[
          'Yes, I acknowledge that SAMCA owns all data, CRM records, workflow configurations, and credentials at every milestone.',
        ]}
        value={data.consent_data_ownership}
        onChange={onChange}
        required
        error={errors.consent_data_ownership}
      />

      <p className="text-[13px] text-atlas-dark/40 leading-relaxed mt-4 mb-2" style={{ textWrap: 'balance' }}>
        Detailed POPIA and consent architecture specifications appear in Section 4.2 of the Service Level Agreement. These declarations do not replace the SLA; they confirm SAMCA's understanding of the operational reality before build commences.
      </p>

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
