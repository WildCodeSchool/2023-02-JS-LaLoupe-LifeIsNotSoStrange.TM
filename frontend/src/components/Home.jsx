import Intro from "./Intro";
import Chronometre from "./Timer";
import Ecran from "./Ecran";
import SelectStoryList from "./SelectStoryList";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Intro />
      <SelectStoryList />
      <Chronometre />
      <Ecran />
    </div>
  );
}

export default Home;
