import React from "react";
import "./SelectStoryCard.css";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";

export default function SelectStoryCard({ title, image, summary }) {
  return (
    <section className="">
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
          {/* <Link to="/game">
            <button className="title" type="button">
              Play
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}

SelectStoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
