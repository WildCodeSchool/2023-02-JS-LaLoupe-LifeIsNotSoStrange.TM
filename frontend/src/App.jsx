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

function App() {
  const [avatarParams, setAvatarParams] = useState({
    avatarStyle: "Transparent",
    accessoriesType: "Round",
    topType: "LongHairBob",
    clotheColor: "Blue02",
    clotheType: "ShirtCrewNeck",
    eyeType: "Surprised",
    eyebrowType: "SadConcernedNatural",
    facialHairColor: "Black",
    facialHairType: "BeardLight",
    hairColor: "Brown",
    mouthType: "Twinkle",
    skinColor: "Pale",
    pseudo: "",
  });
  return (
    <div className="min-h-screen relative pb-[60px]">
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
        <Route path="/game" element={<PartyGame />} />
        <Route path="/cocktailgame" element={<CocktailGame />} />
        <Route
          path="/game"
          element={
            <PartyGame
              avatarParams={avatarParams}
              pseudo={avatarParams.pseudo}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/selectstory" element={<SelectStoryList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
