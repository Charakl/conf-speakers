import { useState } from "react";

export default function AddSpeech({ onAddSpeech }) {
  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !speaker || !description || !duration) return;

    const id = crypto.randomUUID();
    const newSpeech = {
      id,
      title,
      speaker,
      description,
      duration,
    };

    onAddSpeech(newSpeech);

    setTitle("");
    setSpeaker("");
    setDescription("");
    setDuration("");
  }

  return (
    <form className="form-add-speech" onSubmit={handleSubmit}>
      <label>Add title</label>
      <input
        type="text"
        className="fields"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Add speaker</label>
      <input
        type="text"
        className="fields"
        value={speaker}
        onChange={(e) => setSpeaker(e.target.value)}
      />

      <label>Add description</label>
      <textarea
        className="fields"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Add duration</label>
      <input
        type="text"
        className="fields"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button className="submit-btn">Add speech</button>
    </form>
  );
}
