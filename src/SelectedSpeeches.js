export default function SelectedSpeeches({ selectedSpeeches }) {
  return (
    <div className="selected-speeches">
      <h2 className="speeches-title">Speeches you are interested in:</h2>
      {selectedSpeeches.map((speech) => (
        <div key={speech.id}>
          <span className="selected-title">{speech.title}</span>
          <span className="selected-speaker"> By {speech.speaker}</span>
        </div>
      ))}
    </div>
  );
}
