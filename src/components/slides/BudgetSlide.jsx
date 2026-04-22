import SliderCard from '../ui/SliderCard'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import NavigationButtons from '../ui/NavigationButtons'

export default function BudgetSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Commercial and budget parameters
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Captures the financial and commercial envelope without asking for sensitive figures.
      </p>

      <RadioGroup
        label="Budget approval status"
        name="budget_approval_status"
        options={[
          'Fully approved, ready to deploy',
          'Partially approved',
          'Pending sponsor or donor confirmation',
          'In final stages of sign-off',
        ]}
        value={data.budget_approval_status}
        onChange={onChange}
        required
        error={errors.budget_approval_status}
      />
      <RadioGroup
        label="Premier's Office funding status"
        name="budget_premier_office_status"
        options={[
          'Endorsed, funding confirmed',
          'Endorsed, funding pending',
          'In conversation',
          'Not engaged',
        ]}
        value={data.budget_premier_office_status}
        onChange={onChange}
        required
        error={errors.budget_premier_office_status}
      />
      <RadioGroup
        label="LinkedIn advertising budget intent"
        name="budget_linkedin_ad_budget_intent"
        options={[
          'Yes, will fund R38,000/month recommended',
          'Yes, at a lower level',
          'Not at this stage, organic only',
          'Undecided',
        ]}
        value={data.budget_linkedin_ad_budget_intent}
        onChange={onChange}
        required
        error={errors.budget_linkedin_ad_budget_intent}
      />
      <TextArea
        label="Other paid channels"
        name="budget_other_paid_channels"
        value={data.budget_other_paid_channels}
        onChange={onChange}
        rows={3}
        placeholder="Any intention to run paid Google, Meta, radio, or print. If yes, scope and budget."
        error={errors.budget_other_paid_channels}
      />
      <RadioGroup
        label="Deposit terms"
        name="commercial_deposit_acknowledgement"
        options={[
          'Yes, deposit terms agreed',
          'Under discussion with Atlas',
          'Needs Board or Exco sign-off',
        ]}
        value={data.commercial_deposit_acknowledgement}
        onChange={onChange}
        required
        error={errors.commercial_deposit_acknowledgement}
      />
      <RadioGroup
        label="Preferred invoice cycle"
        name="commercial_preferred_invoice_cycle"
        options={[
          'Monthly in advance',
          'Monthly in arrears',
          'Milestone-based',
        ]}
        allowOther
        value={data.commercial_preferred_invoice_cycle}
        onChange={onChange}
        required
        error={errors.commercial_preferred_invoice_cycle}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
