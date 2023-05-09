import React from "react";
import "./SelectStoryCard.css";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export default function SelectStoryCard({ id, title, image, summary }) {
  return (
    <section className="">
      <Link to={id === 2 ? "/cocktailgame" : "/game"}>
        <div className="card-container">
          <div className="card-content">
            <div className="card-title">
              <span className="title">{title}</span>
            </div>
            <div className="card-body">
              <img src={image} alt="" />
            </div>
            <div className="card-footer">
              <span className="title">{summary}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

SelectStoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
