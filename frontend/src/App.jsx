import "./App.css";
import SelectStoryCard from "@components/SelectStoryCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Chronometre from "./components/Timer";
import Ecran from "./components/Ecran";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <Intro />
      <Chronometre />
      <SelectStoryCard />
      <Ecran />
      <Footer />
    </div>
  );
};

export default App;
