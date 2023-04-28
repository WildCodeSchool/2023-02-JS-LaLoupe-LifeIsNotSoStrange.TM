import PropTypes from "prop-types";
import Timer from "./Timer";
import Screen from "./Screen";
import Story from "./Story";

export default function PartyGame({
  tempsRestant,
  setTempsRestant,
  setTimer,
  endGame,
}) {
  return (
    <div>
      <Timer
        tempsRestant={tempsRestant}
        setTempsRestant={setTempsRestant}
        setTimer={setTimer}
      />
      <Screen />
      <Story endGame={endGame} />
    </div>
  );
}
PartyGame.propTypes = {
  tempsRestant: PropTypes.string.isRequired,
  setTempsRestant: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
};
