import "./Ecran.css";
import screen from "../assets/gameImg1.jpg";

function Ecran() {
  return (
    <div className="Bureau">
      <img src={screen} alt="toronto office at night" />
    </div>
  );
}

export default Ecran;
