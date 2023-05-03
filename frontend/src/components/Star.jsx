import PropTypes from "prop-types";
import "./Star.css";

const Rating = ({ rating, setRating }) => {
  const handleRating = (value, event) => {
    if (event.key === "Enter" || !event.key) {
      setRating(value);
    }
  };

  return (
    <div>
      <p>Donnez une note :</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? "gray gold" : "gray"}
          onMouseEnter={() => {
            setRating(value);
          }}
          onClick={() => handleRating(value)}
          onKeyDown={(event) => handleRating(value, event)}
          role="button"
          tabIndex="0"
        >
          ★
        </span>
      ))}
    </div>
  );
};
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
export default Rating;
