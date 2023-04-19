import Intro from "./Intro";
import Chronometre from "./Timer";
import Ecran from "./Ecran";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Intro />
      <Chronometre />
      <Ecran />
    </div>
  );
}

export default Home;
