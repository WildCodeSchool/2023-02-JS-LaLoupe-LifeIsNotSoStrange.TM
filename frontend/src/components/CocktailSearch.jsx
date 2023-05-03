import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSearch}>
        <label
          className="text-yellow-400 mt-2 mb-2 underline"
          htmlFor="searchInput"
        >
          Recherche du cocktail :
        </label>
        <input
          className="w-10/12 ml-[8%] rounded-md"
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="text-yellow-400 border-2 border-yellow-400 hover:border-white rounded-s w-1/4 ml-[37%] mb-2 mt-2"
          type="submit"
        >
          Rechercher
        </button>
      </form>

      <div className="m-8 ">
        {results.map((drink) => (
          <div
            className="flex-wrap m-5 justify-center items-center  bg-slate-500 "
            key={drink.idDrink}
          >
            <h2 className="text-white">{drink.strDrink}</h2>
            <img
              className="m-2 w-1/6 p-2"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <p>
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
