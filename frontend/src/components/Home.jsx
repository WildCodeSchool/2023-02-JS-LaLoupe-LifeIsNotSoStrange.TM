import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Chronometre from "./Timer";
import Ecran from "./Ecran";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <Intro />
      <Chronometre />
      <Ecran />
      <Footer />
    </div>
  );
}

export default Home;
