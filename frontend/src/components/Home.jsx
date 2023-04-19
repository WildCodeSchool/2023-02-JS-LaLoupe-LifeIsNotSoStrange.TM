import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Chronometre from "./Timer";
import Ecran from "./Ecran";
import SelectStoryCard from "./SelectStoryCard";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <Intro />
      <SelectStoryCard />
      <Chronometre />
      <Ecran />
      <Footer />
    </div>
  );
}

export default Home;
