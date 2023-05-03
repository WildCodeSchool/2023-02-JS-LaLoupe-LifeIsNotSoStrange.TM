import SelectStoryCard from "./SelectStoryCard";

const selectStorys = [
  {
    id: 1,
    title: "Toronto by night",
    summary: "Une sombre aventure dans les rues de Toronto.",
    image: "./src/assets/detective_city.jpg",
  },
  {
    id: 2,
    title: "Cocktail rush !",
    summary: "les commandes s'enchaînent et se déchainent !",
    image: "./src/assets/cocktail-au-comptoir.jpg",
  },
  {
    id: 3,
    title: "Où est l'aqua ?",
    summary: "Aqua est une couleur spéciale...",
    image: "./src/assets/texture-aqua.jpg",
  },
  {
    id: 4,
    title: "Xavier et les licornes cannibales.",
    summary: " Xavier a dit: 'oh non pas encore !'",
    image: "./src/assets/little-ponie.jpg",
  },
];
export default function SelectStoryList() {
  return (
    <div className="theContainer">
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
