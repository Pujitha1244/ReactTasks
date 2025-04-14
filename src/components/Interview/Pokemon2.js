import React, { useEffect, useState } from "react";

const Pokemon2 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const responseJson = await response.json();
        const data = responseJson.results;
        setPokemonList(data);
      } catch {}
    };
    fetchData();
  }, []);

  const handleSelect = async (event) => {
    const selectedUrl = event.target.value;

    if (pokemonDetails[selectedUrl]) {
      setSelectedPokemonDetails(pokemonDetails[selectedUrl]);
      return;
    }
    try {
      const response = await fetch(selectedUrl);
      const responseJson = await response.json();
      console.log(responseJson);
      setPokemonDetails((prev) => ({ ...prev, [selectedUrl]: responseJson }));
      setSelectedPokemonDetails(responseJson);
    } catch {}
  };

  console.log(pokemonDetails);
  return (
    <div>
      <h1>Pokemon2</h1>
      <select onChange={handleSelect}>
        <option>Select</option>
        {pokemonList.map((pokemonName) => (
          <option value={pokemonName.url}>{pokemonName.name}</option>
        ))}
      </select>
      {selectedPokemonDetails && (
        <div>
          <h2>{selectedPokemonDetails.name}</h2>
          {selectedPokemonDetails.abilities.map((ability) => (
            <p>{ability.ability.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon2;
