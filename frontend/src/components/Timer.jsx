import { useEffect } from "react";
import PropTypes from "prop-types";
import "./Timer.css";

function Chronometer({ setTimer, tempsRestant, setTempsRestant }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (tempsRestant === 0) {
        clearInterval(intervalId);
      } else {
        setTempsRestant(tempsRestant - 1);
      }
    }, 1000);
    setTimer(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [tempsRestant]);

  const minutes = Math.floor(tempsRestant / 60);
  const secondes = tempsRestant % 60;

  return (
    <div className="Chronometer">
      {minutes} min {minutes > 1}
      {secondes} sec{secondes > 1}
    </div>
  );
}

Chronometer.propTypes = {
  tempsRestant: PropTypes.string.isRequired,
  setTempsRestant: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
};

export default Chronometer;
