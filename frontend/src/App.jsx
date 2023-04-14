import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Chronometre from "./components/Timer";
import Ecran from "./components/Ecran";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
      <Chronometre />
      <Ecran />
    </div>
  );
}

export default App;
