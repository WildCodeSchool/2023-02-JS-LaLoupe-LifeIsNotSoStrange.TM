import { useRef } from "react";
import Quizz from "./Quizz";

import CocktailSearch from "./CocktailSearch";

export default function CocktailGame() {
  const divRef = useRef();
  return (
    <div ref={divRef}>
      <Quizz divRef={divRef} />
      <CocktailSearch />
    </div>
  );
}
