// import React, { useEffect, useState } from "react";

// const Pokemon = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const fetchPokemons = async () => {
//         try {
//           const response = await fetch(
//             "https://pokeapi.co/api/v2/pokemon?limit=10"
//           );
//           const data = await response.json();
//           const pokemonList = data.results;

//           for (let pokemon of pokemonList) {
//             // Fetch Pokémon details
//             const detailsRes = await fetch(pokemon.url);
//             const details = await detailsRes.json();

//             // Fetch abilities one by one
//             let abilities = [];
//             for (let abilityObj of details.abilities) {
//               const abilityRes = await fetch(abilityObj.ability.url);
//               const abilityData = await abilityRes.json();
//               abilities.push(abilityData.name);
//             }

//             // Fetch moves one by one (limit to first 5)
//             let moves = [];
//             for (let i = 0; i < Math.min(details.moves.length, 5); i++) {
//               const moveObj = details.moves[i];
//               const moveRes = await fetch(moveObj.move.url);
//               const moveData = await moveRes.json();
//               moves.push(moveData.name);
//             }

//             // Fetch stats one by one
//             let stats = [];
//             for (let statObj of details.stats) {
//               const statRes = await fetch(statObj.stat.url);
//               const statData = await statRes.json();
//               stats.push(`${statData.name}: ${statObj.base_stat}`);
//             }

//             // Add fetched details to Pokémon object
//             pokemon.abilities = abilities;
//             pokemon.moves = moves;
//             pokemon.stats = stats;
//           }

//           setPokemons(pokemonList);
//           setLoading(false);
//         } catch (error) {
//           console.error("Error fetching Pokémon data:", error);
//           setLoading(false);
//         }
//       };

//       fetchPokemons();
//     }, []);

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const response = await fetch(
//           "https://pokeapi.co/api/v2/pokemon?limit=10"
//         );
//         const data = await response.json();
//         const pokemonList = data.results;

//         for (let pokemon of pokemonList) {
//           const detailsRes = await fetch(pokemon.url);
//           const details = await detailsRes.json();

//           // Fetching abilities, moves, and stats one by one
//           let abilities = details.abilities.map((a) => a.ability.name);
//           let moves = details.moves.slice(0, 5).map((m) => m.move.name);
//           let stats = details.stats.map(
//             (s) => `${s.stat.name}: ${s.base_stat}`
//           );

//           // Adding details to the Pokémon object
//           pokemon.abilities = abilities;
//           pokemon.moves = moves;
//           pokemon.stats = stats;
//         }

//         setPokemons(pokemonList);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setLoading(false);
//       }
//     };

//     fetchPokemons();
//   }, []);

//   return (
//     <div>
//       <h1>Pokémon List</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Abilities</th>
//               <th>Moves</th>
//               <th>Stats</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pokemons.map((poke, idx) => (
//               <tr key={idx}>
//                 <td>{poke.name}</td>
//                 <td>{poke.abilities.join(", ") || "N/A"}</td>
//                 <td>{poke.moves.join(", ") || "N/A"}</td>
//                 <td>{poke.stats.join(", ") || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Pokemon;

// import React, { useEffect, useState } from "react";

// const Pokemon = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
//         const data = await response.json();
//         const pokemonList = data.results;

//         // Fetch all Pokémon details in parallel
//         const detailsPromises = pokemonList.map(async (pokemon) => {
//           const detailsRes = await fetch(pokemon.url);
//           return detailsRes.json();
//         });

//         const detailsList = await Promise.all(detailsPromises);

//         // Process details after all are fetched
//         const enrichedPokemons = detailsList.map((details, index) => ({
//           name: pokemonList[index].name,
//           abilities: details.abilities.map((a) => a.ability.name),
//           moves: details.moves.slice(0, 5).map((m) => m.move.name),
//           stats: details.stats.map((s) => `${s.stat.name}: ${s.base_stat}`),
//         }));

//         setPokemons(enrichedPokemons);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setLoading(false);
//       }
//     };

//     fetchPokemons();
//   }, []);

//   return (
//     <div>
//       <h1>Pokémon List</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Abilities</th>
//               <th>Moves</th>
//               <th>Stats</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pokemons.map((poke, idx) => (
//               <tr key={idx}>
//                 <td>{poke.name}</td>
//                 <td>{poke.abilities.join(", ") || "N/A"}</td>
//                 <td>{poke.moves.join(", ") || "N/A"}</td>
//                 <td>{poke.stats.join(", ") || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Pokemon;

import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const responseData = await response.json();
        const pokemonList = responseData.results;
        setPokemons(pokemonList);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };
    fetchPokemon();
  }, []);

  const handlePokemonSelect = async (event) => {
    const selectedUrl = event.target.value;

    if (!selectedUrl) return;

    // Check if details are already cached
    if (pokemonDetails[selectedUrl]) {
      setSelectedPokemon(pokemonDetails[selectedUrl]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(selectedUrl);
      const details = await response.json();

      // Cache the details
      setPokemonDetails((prev) => ({ ...prev, [selectedUrl]: details }));
      setSelectedPokemon(details);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokemon selector</h1>
      <select onChange={handlePokemonSelect}>
        <option value="">Select a Pokémon</option>
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>

      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <h3>Abilities:</h3>
          <ul style={{ listStyle: "none" }}>
            {selectedPokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
