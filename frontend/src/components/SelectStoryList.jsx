import SelectStoryCard from "./SelectStoryCard";

const selectStorys = [
  {
    id: 1,
    title: "Toronto by night",
    summary: "A dark adventure on the streets of Toronto city.",
    image: "./src/assets/detective_city.jpg",
  },
  {
    id: 2,
    title: "Cocktail rush !",
    summary: "Will you survive this rush?",
    image: "./src/assets/cocktail-au-comptoir.jpg",
  },
  {
    id: 3,
    title: "Where is Aqua ?",
    summary: "Aqua is a very special color...",
    image: "./src/assets/texture-aqua.jpg",
  },
  {
    id: 4,
    title: "Xavier and the little canibal unicorns ponies.",
    summary:
      "the question that we can ask ourselves and why xavier said: 'oh no not yet!'",
    image: "./src/assets/little-ponie.jpg",
  },
];
export default function SelectStoryList() {
  return (
    <div className="lg: flex flex-wrap m-auto justify-center">
      {selectStorys.map((selectStory) => (
        <SelectStoryCard
          key={`storycard-${selectStory.id}`}
          id={selectStory.id}
          title={selectStory.title}
          image={selectStory.image}
          summary={selectStory.summary}
        />
      ))}
    </div>
  );
}
