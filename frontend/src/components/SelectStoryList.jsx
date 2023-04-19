import SelectStoryCard from "./SelectStoryCard";

const selectStorys = [
  {
    title: "Toronto by night",
    summary: "A dark adventure on the streets of Toronto city.",
    image: "./src/assets/detective_city.jpg",
  },
  {
    title: "Back to the Maya's life !",
    summary: "This time you took your dictionary.",
    image: "./src/assets/maya-story.jpg",
  },
  {
    title: "Where is Aqua ?",
    summary: "Aqua is a very special color...",
    image: "./src/assets/texture-aqua.jpg",
  },
  {
    title: "Xavier and the little canibal unicorns ponies.",
    summary:
      "the question that we can ask ourselves and why xavier said: 'oh no not yet!'",
    image: "./src/assets/little-ponie.jpg",
  },
];

export default function SelectStoryList() {
  return (
    <div>
      {selectStorys.map((selectStory) => (
        <SelectStoryCard
          title={selectStory.title}
          image={selectStory.image}
          summary={selectStory.summary}
        />
      ))}
    </div>
  );
}
