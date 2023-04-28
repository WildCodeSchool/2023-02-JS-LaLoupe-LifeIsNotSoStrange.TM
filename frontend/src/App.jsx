import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PartyGame from "./components/PartyGame";
import Leaderboard from "./components/Leaderboard";
import CocktailGame from "./components/CocktailGame";

function App() {
  return (
    <div className="min-h-screen relative pb-[60px]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<PartyGame />} />
        <Route path="/cocktailgame" element={<CocktailGame />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
