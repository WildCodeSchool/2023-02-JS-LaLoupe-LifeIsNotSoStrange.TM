import "./Leaderboard.css";
import PropTypes from "prop-types";

function Leaderboard({ players }) {
  return (
    <div className="tableau">
      <table>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Avatar</th>
            <th>Classement</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={`player-${player.id}`}>
              <td>{player.pseudo}</td>
              <td>{player.avatar}</td>
              <td>{player.position}</td>
              <td>{player.timer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Leaderboard.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      timer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Leaderboard;
