import TopicList from "./TopicList";
import SpeechInfo from "./SpeechInfo";
import AddSpeech from "./AddSpeech";
import SelectedSpeeches from "./SelectedSpeeches";
import { useState } from "react";

const topics = [
  {
    id: 118836,
    title: "Ada Lovelace",
    speaker: "Eleanor Harper",
    speakerDetails: "shdfhads sdhf uj",
    image: "https://i.pravatar.cc/48?u=118836",
    description:
      "Explore the extraordinary life and visionary contributions of Ada Lovelace, the world's first computer programmer. Join us as we delve into her groundbreaking work with Charles Babbage's Analytical Engine, unveiling the pioneering ideas that laid the groundwork for modern computing. Discover the untold story of a trailblazing woman whose insights transcend time, shaping the very essence of our digital world.",
    duration: "12:00 - 13:00",
  },
  {
    id: 118837,
    title: "Margaret Hamilton",
    speaker: "Dr. Olivia Chen",
    speakerDetails: "shdfhads sdhf uj",
    image: "https://i.pravatar.cc/48?u=118836",
    description:
      "Explore the groundbreaking contributions of Margaret Hamilton, a pioneering computer scientist instrumental in the Apollo space program. Delve into her role as the leader of the Software Engineering Division at MIT, where she crafted innovative software solutions, ensuring the success of the historic Apollo 11 moon landing. Join us to unravel the extraordinary journey of a visionary woman who shaped the landscape of software engineering and left an indelible mark on space exploration.",
    duration: "13:00 - 14:00",
  },
  {
    id: 118838,
    title: "Grace Hopper",
    speaker: "Professor Isabella Morgan",
    speakerDetails: "shdfhads sdhf uj",
    image: "https://i.pravatar.cc/48?u=118836",
    description:
      "Explore the remarkable legacy of Grace Hopper, a pioneering computer scientist and U.S. Navy admiral. Dive into the story of this innovative woman who not only played a pivotal role in the development of the first commercial computer but also created the first compiler, revolutionizing programming. Join us to delve into the life and impact of Grace Hopper, a visionary leader and advocate for women in computing, whose contributions have left an indelible mark on the world of technology.",
    duration: "14:00 - 15:00",
  },
  {
    id: 118839,
    title: "Annie Easley",
    speaker: "Alexandra Weaver",
    speakerDetails: "shdfhads sdhf uj",
    image: "https://i.pravatar.cc/48?u=118836",
    description:
      "Embark on a journey through the extraordinary career of Annie Easley, a pioneering African American computer scientist and mathematician. Join us in exploring her pivotal role at NASA's Lewis Research Center, where her groundbreaking work in developing computer code for energy-conversion systems significantly impacted aerospace engineering. Discover the life and lasting legacy of Annie Easley, a passionate advocate for diversity in STEM, whose contributions continue to inspire innovation and inclusivity in the world of science and technology.",
    duration: "15:00 - 16:00",
  },
];

export default function App() {
  const [selectedSpeech, setSelectedSpeech] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [speeches, setSpeeches] = useState(topics);
  const [selectedSpeeches, setSelectedSpeeches] = useState([]);

  function handleSelection(selSpeech) {
    setSelectedSpeeches((selectedSpeeches) => [...selectedSpeeches, selSpeech]);
  }

  function handleSelectedSpeech(speech) {
    setSelectedSpeech(speech);
    setShowForm(false);
  }

  function handleAddSpeech(speech) {
    setSpeeches((speeches) => [...speeches, speech]);
  }

  function handleShowForm() {
    setShowForm(true);
    setSelectedSpeech(null);
  }

  return (
    <div className="app">
      <h1 className="title">INFLUENTIAL WOMEN IN COMPUTER SCIENCE</h1>
      <h2 className="sub-title">
        "Empowering Innovation, Celebrating Excellence: Unveiling the Stories of
        Famous Women in Computer Science!"
      </h2>
      <div className="container">
        <TopicList
          speeches={speeches}
          selectedSpeech={selectedSpeech}
          onSelectedSpeech={handleSelectedSpeech}
        />
        {selectedSpeech && (
          <SpeechInfo
            selectedSpeeches={selectedSpeeches}
            selectedSpeech={selectedSpeech}
            onSelection={handleSelection}
          />
        )}
        {showForm && <AddSpeech onAddSpeech={handleAddSpeech} />}
      </div>
      <button className="speaker-btn" onClick={handleShowForm}>
        Be the speaker
      </button>

      <SelectedSpeeches selectedSpeeches={selectedSpeeches} />
    </div>
  );
}
