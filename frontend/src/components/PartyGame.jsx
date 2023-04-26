import PropTypes from "prop-types";
import Timer from "./Timer";
import Ecran from "./Ecran";
import Story from "./Story";

export default function PartyGame({ tempsRestant, setTempsRestant, setTimer }) {
  return (
    <div>
      <Timer
        tempsRestant={tempsRestant}
        setTempsRestant={setTempsRestant}
        setTimer={setTimer}
      />
      <Ecran />
      <Story />
    </div>
  );
}
PartyGame.propTypes = {
  tempsRestant: PropTypes.string.isRequired,
  setTempsRestant: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
};
