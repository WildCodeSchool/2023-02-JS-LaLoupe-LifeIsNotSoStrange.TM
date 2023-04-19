import React from "react";
import { PropTypes } from "prop-types";

export default function SelectStoryCard({ title, image, summary }) {
  return (
    <div className="bg-gray-600 grid p-8 items-center rounded-lg max-w-xs justify-center m-8">
      <h4 className=" border-2 rounded-md font-mono font-extrabold text-center text-xs text-white">
        {title}
      </h4>
      <img
        className="object-contain rounded-md my-4 shadow-xl"
        src={image}
        alt=""
      />
      <p className="text-center text-white font-mono font-extrabold text-xs">
        {summary}
      </p>
      <button
        className="bg-pink-200 font-mono p-1 mt-3 rounded-md px-3"
        type="button"
      >
        Play
      </button>
    </div>
  );
}

SelectStoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.isRequired,
};
