import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Chronometre from "./components/Timer";
import Ecran from "./components/Ecran";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <Intro />
      <Chronometre />
      <Ecran />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
