import Topic from "./Topic";

export default function TopicList({
  speeches,
  selectedSpeech,
  onSelectedSpeech,
}) {
  return (
    <ul className="topic-list">
      {speeches.map((speech) => (
        <Topic
          speech={speech}
          key={speech.id}
          selectedSpeech={selectedSpeech}
          onSelectedSpeech={onSelectedSpeech}
        />
      ))}
    </ul>
  );
}
