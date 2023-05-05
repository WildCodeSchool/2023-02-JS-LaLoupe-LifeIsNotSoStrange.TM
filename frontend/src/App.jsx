import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PartyGame from "./components/PartyGame";
import Leaderboard from "./components/Leaderboard";
import CocktailGame from "./components/CocktailGame";
import SelectStoryList from "./components/SelectStoryList";

const board = [
  {
    id: 1,
    pseudo: "Xavier",
    avatar: {
      avatarStyle: "Transparent",
      accessoriesType: "Round",
      topType: "ShortHairShortFlat",
      clotheColor: "Blue02",
      clotheType: "BlazerShirt",
      eyeType: "Surprised",
      eyebrowType: "SadConcernedNatural",
      facialHairColor: "Black",
      facialHairType: "BeardLight",
      hairColor: "Black",
      mouthType: "Serious",
      skinColor: "Pale",
    },
    position: 1,
    timer: 0,
  },
  {
    id: 2,
    pseudo: "Atila",
    avatar: {
      avatarStyle: "Transparent",
      accessoriesType: "Blanck",
      topType: "LongHairStraight",
      clotheColor: "Blue02",
      clotheType: "Hoodie",
      eyeType: "Surprised",
      eyebrowType: "SadConcernedNatural",
      facialHairColor: "Black",
      facialHairType: "Blanck",
      hairColor: "Auburn",
      mouthType: "Serious",
      skinColor: "Pale",
    },
    position: 2,
    timer: 50,
  },
  {
    id: 3,
    pseudo: "Luc",
    avatar: {
      avatarStyle: "Transparent",
      accessoriesType: "Round",
      topType: "ShortHairShortFlat",
      clotheColor: "Blue02",
      clotheType: "ShirtCrewNeck",
      eyeType: "Surprised",
      eyebrowType: "SadConcernedNatural",
      facialHairColor: "Brown",
      facialHairType: "BeardLight",
      hairColor: "Brown",
      mouthType: "Serious",
      skinColor: "Pale",
    },
    position: 3,
    timer: 120,
  },
  {
    id: 4,
    pseudo: "Ilias",
    avatar: {
      avatarStyle: "Transparent",
      accessoriesType: "Blanck",
      topType: "ShortHairShortFlat",
      clotheColor: "Blue02",
      clotheType: "ShirtCrewNeck",
      eyeType: "Surprised",
      eyebrowType: "SadConcernedNatural",
      facialHairColor: "Blanck",
      facialHairType: "Blanck",
      hairColor: "Black",
      mouthType: "Serious",
      skinColor: "Pale",
    },
    position: 4,
    timer: 1100,
  },
  {
    id: 5,
    pseudo: "Florian",
    avatar: {
      avatarStyle: "Transparent",
      accessoriesType: "Round",
      topType: "ShortHairShortFlat",
      clotheColor: "Blue02",
      clotheType: "ShirtCrewNeck",
      eyeType: "Surprised",
      eyebrowType: "SadConcernedNatural",
      facialHairColor: "Black",
      facialHairType: "Blanck",
      hairColor: "Brown",
      mouthType: "Serious",
      skinColor: "Pale",
    },
    position: 5,
    timer: 1200,
  },
];
function App() {
  const [avatarParams, setAvatarParams] = useState({
    avatarStyle: "Transparent",
    accessoriesType: "Round",
    topType: "ShortHairDreads01",
    clotheColor: "Blue02",
    clotheType: "BlazerSweater",
    eyeType: "Surprised",
    eyebrowType: "SadConcernedNatural",
    facialHairColor: "Black",
    facialHairType: "BeardLight",
    hairColor: "Brown",
    mouthType: "Twinkle",
    skinColor: "Pale",
    pseudo: "",
  });
  const [players] = useState(board);
  const [tempsRestant, setTempsRestant] = useState(1200);
  const [timer, setTimer] = useState();
  const endGame = () => {
    clearInterval(timer);
    /* Verifier que le joueur qui a fini la partie n'a pas deja un classement , si il est dedans verifier si le temps restant est meilleur que l'ancien si il l'est modfier ou non si le resultatt est meilleur et le modifier en conséquence si le jouer n l'est pas ajouter les informations dans le classement ! */
  };
  return (
    <div className="min-h-screen relative">
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              avatarParams={avatarParams}
              setAvatarParams={setAvatarParams}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/game"
          element={
            <PartyGame
              avatarParams={avatarParams}
              pseudo={avatarParams.pseudo}
              tempsRestant={tempsRestant}
              setTempsRestant={setTempsRestant}
              timer={timer}
              setTimer={setTimer}
              endGame={endGame}
            />
          }
        />
        <Route path="/cocktailgame" element={<CocktailGame />} />
        <Route path="/selectstory" element={<SelectStoryList />} />
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
