import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
