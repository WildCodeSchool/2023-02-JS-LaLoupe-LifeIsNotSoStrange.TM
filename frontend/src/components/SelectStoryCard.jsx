import React from "react";

const selectStoryList = [
  {
    tittle: "Toronto by night",
    summary: "A dark adventure on the streets of Toronto city.",
    image: "./src/assets/detective_city.jpg",
  },
  {
    tittle: "Back to the Maya's life !",
    summary: "This time you took your dictionary.",
    image: "./src/assets/maya-story.jpg",
  },
  {
    tittle: "Where is Aqua ?",
    summary: "Aqua is a very special color...",
    image: ".src/assets/panel-colors.png",
  },
  {
    tittle: "Xavier and the little canibal unicorns ponies.",
    summary:
      "the question that we can ask ourselves and why xavier said: 'oh no not yet!'",
    image: "./src/assets/little-ponie.jpg",
  },
];

const SelectStoryCard = () => {
  const selectStory = selectStoryList[2];
  return (
    <div className="bg-amber-400 p-8 flex flex-col items-center rounded-lg max-w-xs justify-center max-md:m-16">
      <h4 className=" font-mono font-extrabold text-center text-xs">
        {selectStory.tittle}
      </h4>
      <img className=" rounded-md my-4" src={selectStory.image} alt="" />
      <p className=" text-center font-mono font-extrabold text-xs">
        {selectStory.summary}
      </p>
      <button
        className="bg-teal-300 font-mono p-1 mt-3 rounded-md px-3"
        type="button"
      >
        Play
      </button>
    </div>
  );
};

export default SelectStoryCard;
