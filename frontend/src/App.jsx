import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Chronometre from "./components/Timer";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
      <Chronometre />
    </div>
  );
}

export default App;
