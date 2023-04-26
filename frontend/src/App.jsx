import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PartyGame from "./components/PartyGame";
import Leaderboard from "./components/Leaderboard";

const tableau = [
  {
    id: 1,
    pseudo: "Xavier",
    avatar: "img",
    position: 1,
    timer: "00:00",
  },
  {
    id: 2,
    pseudo: "Atila",
    avatar: "img",
    position: 2,
    timer: "00:50",
  },
  {
    id: 3,
    pseudo: "Luc",
    avatar: "img",
    position: 3,
    timer: "01:08",
  },
  {
    id: 4,
    pseudo: "Ilias",
    avatar: "img",
    position: 4,
    timer: "08:08",
  },
  {
    id: 5,
    pseudo: "Florian",
    avatar: "img",
    position: 5,
    timer: "16:08",
  },
];
function App() {
  const [players] = useState(tableau);
  const [tempsRestant, setTempsRestant] = useState(1200);
  const [timer, setTimer] = useState();
  return (
    <div className="min-h-screen relative pb-[60px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/game"
          element={
            <PartyGame
              tempsRestant={tempsRestant}
              setTempsRestant={setTempsRestant}
              timer={timer}
              setTimer={setTimer}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard players={players} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
