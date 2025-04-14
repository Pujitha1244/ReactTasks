// import React, { useEffect, useState } from "react";

// const StarWarsApp = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://swapi.dev/api/people/");
//         const data = await response.json();
//         const charactersData = data.results;
//         console.log(charactersData);

//         for (let char of charactersData) {
//           // Fetch film titles one by one
//           let filmTitles = [];
//           for (let filmURL of char.films) {
//             const filmRes = await fetch(filmURL);
//             const filmData = await filmRes.json();
//             filmTitles.push(filmData.title);
//           }

//           // Fetch vehicle names one by one
//           let vehicleNames = [];
//           for (let vehicleURL of char.vehicles) {
//             const vehicleRes = await fetch(vehicleURL);
//             const vehicleData = await vehicleRes.json();
//             vehicleNames.push(vehicleData.name);
//           }

//           // Add fetched details to the character
//           char.films = filmTitles;
//           char.vehicles = vehicleNames;
//         }

//         setCharacters(charactersData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch("https://swapi.dev/api/people/");
  //       const jsonData = await data.json();
  //       const charactersData = jsonData.results;
  //       console.log(charactersData);

  //       for (let char of charactersData) {
  //         let filmsData = [];
  //         for (let film of char.films) {
  //           const charFilmData = await fetch(film);
  //           const charFilmDataJson = await charFilmData.json();
  //           filmsData.push(charFilmDataJson.title);
  //         }

  //         let vehicleNames = [];
  //         for (let vehicleUrl of char.vehicles) {
  //           const vehicleData = await fetch(vehicleUrl);
  //           const vehicleJson = await vehicleData.json();
  //           vehicleNames.push(vehicleJson.name);
  //         }

  //         char.films = filmsData;
  //         char.vehicles = vehicleNames;
  //       }
  //       setCharacters(charactersData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

//   console.log('characters', characters)
//   return (
//     <div>
//       <h1>Star Wars Characters</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Films</th>
//               <th>Vehicles</th>
//             </tr>
//           </thead>
//           <tbody>
//             {characters.map((char, idx) => (
//               <tr key={idx}>
//                 <td>{char.name}</td>
//                 <td>{char.films.join(", ") || "N/A"}</td>
//                 <td>{char.vehicles.join(", ") || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StarWarsApp;

import React, { useEffect, useState } from "react";

const StarWarsApp = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // 1. Fetching the list of characters (first API call)
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        const charactersData = data.results; // Array of characters with {name, films, vehicles}
  
        for (let character of charactersData) {
          // 2. Extracting films and vehicles directly using map
          let films = await Promise.all(
            character.films.map(async (filmUrl) => {
              const filmRes = await fetch(filmUrl);
              const filmData = await filmRes.json();
              return filmData.title;
            })
          );
  
          let vehicles = await Promise.all(
            character.vehicles.map(async (vehicleUrl) => {
              const vehicleRes = await fetch(vehicleUrl);
              const vehicleData = await vehicleRes.json();
              return vehicleData.name;
            })
          );
  
          // 3. Assign extracted films and vehicles to the character object
          character.films = films;
          character.vehicles = vehicles;
        }
  
        // 4. Updating state with the modified character list
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Star Wars characters:", error);
        setLoading(false);
      }
    };
  
    fetchCharacters();
  }, []);
  
  return (
    <div>
      <h1>Star characters</h1>
      {loading ? (
        "loading"
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Films</th>
              <th>Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((char, index) => (
              <tr>
                <td>{char.name}</td>
                <td>{char.films.join(",") || "N/A"}</td>
                <td>{char.vehicles.join(",") || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StarWarsApp;
