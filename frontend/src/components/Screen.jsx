import "./Screen.css";
import screen from "../assets/gameImg1.jpg";
import Map from "./MapApi";

function Screen() {
  return (
    <div className="relative">
      <img src={screen} alt="toronto office at night" className="z-0" />
      <div className="absolute top-0 left-0 z-10 w-1/5 ">
        <Map />
      </div>
    </div>
  );
}

export default Screen;
