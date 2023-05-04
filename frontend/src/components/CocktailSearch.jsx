import React, { useState } from "react";
import "./Quizz.css";

function CocktailSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(event) {
    event.preventDefault();

    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { drinks } = data;

        if (drinks === null) {
          setResults([{ strDrink: "Aucun résultat trouvé." }]);
          return;
        }

        setResults(drinks);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="search-cocktail-container">
      <form
        className=" bg-gradient-to-tr to-blue-400 from-green-500 flex flex-col gap-4 p-4 rounded-md"
        onSubmit={handleSearch}
      >
        <label className="label-search" htmlFor="searchInput">
          Recherche du cocktail :
        </label>
        <input
          className="cocktail-input"
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn" type="submit">
          Rechercher
        </button>
      </form>

      <div className=" m-8 flex-wrap items-center ">
        {results.map((drink) => (
          <div
            className=" font-bold  flex flex-col
          justify-center items-center
          sp bg-gradient-to-tr to-blue-400 from-green-500 p-4 align-middle m-5 rounded-md "
            key={drink.idDrink}
          >
            <h2 className="text-white text-center">{drink.strDrink}</h2>
            <img
              className=" p-2 w-1/2 "
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <p className="text-center">
              Its ingredients are : {drink.strIngredient1},{" "}
              {drink.strIngredient2}, {drink.strIngredient3},{" "}
              {drink.strIngredient4}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CocktailSearch;
