import "./Ecran.css";
import screen from "../assets/screen.jpg";

function Ecran() {
  return (
    <div className="Bureau">
      <img src={screen} alt="" />
      <h1>Toronto: 20:00 pm</h1>
    </div>
  );
}

export default Ecran;
