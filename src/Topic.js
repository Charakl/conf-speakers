export default function Topic({ speech, selectedSpeech, onSelectedSpeech }) {
  const isSelected = selectedSpeech?.id === speech.id;

  return (
    <li
      className={isSelected ? "selected" : ""}
      onClick={() => onSelectedSpeech(speech)}
    >
      <h1>{speech.title}</h1>
      <h4>-- by {speech.speaker}</h4>
    </li>
  );
}
