import SliderCard from '../ui/SliderCard'
import TextArea from '../ui/TextArea'
import RadioGroup from '../ui/RadioGroup'
import UploadOrTextArea from '../ui/UploadOrTextArea'
import NavigationButtons from '../ui/NavigationButtons'

export default function SpeakersEndorsementsSlide({ data, onChange, onNext, onBack, errors }) {
  return (
    <SliderCard>
      <div className="w-10 h-[3px] bg-atlas-red rounded-full mb-6" />
      <h2 className="text-2xl md:text-[32px] font-bold text-atlas-dark mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
        Speakers, endorsements, and VIPs
      </h2>
      <p className="text-[15px] text-atlas-dark/40 leading-relaxed mb-10">
        Atlas produces speaker and endorsement announcement graphics on a rolling basis. This section captures the speaker pipeline; SAMCA remains responsible for securing confirmations.
      </p>

      <UploadOrTextArea
        label="Confirmed speakers"
        textFieldName="speaker_confirmed_list"
        uploadFieldName="speaker_confirmed_list_upload"
        data={data}
        onChange={onChange}
        rows={6}
        placeholder="Name, title, organisation, session, confirmation status. One per line, or upload a speaker list."
        error={errors.speaker_confirmed_list}
      />
      <UploadOrTextArea
        label="Target speaker list"
        textFieldName="speaker_target_list"
        uploadFieldName="speaker_target_list_upload"
        data={data}
        onChange={onChange}
        rows={6}
        placeholder="Invited but not yet confirmed speakers. One per line with status, or upload a CSV."
        required
        error={errors.speaker_target_list}
      />
      <RadioGroup
        label="North West Premier endorsement status"
        name="endorsement_premier_status"
        options={[
          'Confirmed in writing',
          'Verbally confirmed',
          'In conversation',
          'Not yet approached',
        ]}
        value={data.endorsement_premier_status}
        onChange={onChange}
        required
        error={errors.endorsement_premier_status}
      />
      <RadioGroup
        label="Minister endorsement status"
        name="endorsement_minister_status"
        options={[
          'Confirmed in writing',
          'Verbally confirmed',
          'In conversation',
          'Not yet approached',
          'N/A',
        ]}
        value={data.endorsement_minister_status}
        onChange={onChange}
        error={errors.endorsement_minister_status}
      />
      <UploadOrTextArea
        label="Traditional leadership"
        textFieldName="endorsement_traditional_leadership"
        uploadFieldName="endorsement_traditional_leadership_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Kings, queens, traditional authorities engaged for the Kings' Honour Cocktail"
        error={errors.endorsement_traditional_leadership}
      />
      <TextArea
        label="Endorsement video status"
        name="endorsement_video_status"
        value={data.endorsement_video_status}
        onChange={onChange}
        rows={3}
        placeholder="Which endorsement videos are planned or recorded. Include Ms Lindiwe and any others."
        error={errors.endorsement_video_status}
      />
      <UploadOrTextArea
        label="VIP guest list notes"
        textFieldName="vip_guest_list_notes"
        uploadFieldName="vip_guest_list_notes_upload"
        data={data}
        onChange={onChange}
        rows={4}
        placeholder="Known personal invitees who are not delegates, sponsors, or speakers"
        error={errors.vip_guest_list_notes}
      />
      <UploadOrTextArea
        label="CEO Recognition Ceremony nominees"
        textFieldName="ceo_recognition_nominees"
        uploadFieldName="ceo_recognition_nominees_upload"
        data={data}
        onChange={onChange}
        rows={3}
        placeholder="Current thinking on CEO Recognition Ceremony honourees"
        error={errors.ceo_recognition_nominees}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </SliderCard>
  )
}
