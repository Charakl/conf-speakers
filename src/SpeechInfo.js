export default function SpeechInfo({
  selectedSpeeches,
  selectedSpeech,
  onSelection,
}) {
  function handleAddSelectedSpeech() {
    const isValueInArray = selectedSpeeches.some(
      (obj) => obj.id === selectedSpeech.id
    );
    !isValueInArray && onSelection(selectedSpeech);
  }
  return (
    <div className="speech-container">
      <h1>{selectedSpeech.title}</h1>
      <div className="speaker">By {selectedSpeech.speaker}</div>
      <p className="description">{selectedSpeech.description}</p>
      <div className="flex-container">
        <div className="duration">{selectedSpeech.duration}</div>
        <button onClick={handleAddSelectedSpeech}>Intrested</button>
      </div>
    </div>
  );
}
