import Intro from "./Intro";
import SelectStoryList from "./SelectStoryList";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Intro />
      <SelectStoryList />
    </div>
  );
}

export default Home;
