import "./Screen.css";
import screen from "../assets/gameImg1.jpg";

function Screen() {
  return (
    <div className="desktop">
      <img src={screen} alt="toronto office at night" />
    </div>
  );
}

export default Screen;
