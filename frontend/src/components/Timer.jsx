import React, { useState, useEffect } from "react";
import "./Timer.css";

function Chronometre() {
  const [tempsRestant, setTempsRestant] = useState(1200);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (tempsRestant === 0) {
        clearInterval(intervalId);
      } else {
        setTempsRestant(tempsRestant - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [tempsRestant]);

  const minutes = Math.floor(tempsRestant / 60);
  const secondes = tempsRestant % 60;

  return (
    <div className="Chrono">
      {minutes} min {minutes > 1}
      {secondes} sec{secondes > 1}
    </div>
  );
}

export default Chronometre;
