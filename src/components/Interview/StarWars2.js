import React, { useState, useEffect } from "react";

const StarWars2 = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const responseJson = await response.json();
      const charactersData = responseJson.results;

      for (let char of charactersData) {
        let filmsData = await Promise.all(
          char.films.map(async (filmUrl) => {
            const filmRes = await fetch(filmUrl);
            const filmData = await filmRes.json();
            return filmData.title;
          })
        );

        let vehiclesdata = await Promise.all(
          char.vehicles.map(async (vehicleUrl) => {
            const vehicleRes = await fetch(vehicleUrl);
            const vehicleData = await vehicleRes.json();
            return vehicleData.name;
          })
        );

        char.films = filmsData;
        char.vehicles = vehiclesdata;
      }
      setCharacters(charactersData);
    };
    fetchData();
  }, []);
  //   console.log(characters);
  return (
    <div>
      <h1>Characters</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Films</td>
            <td>Vehicle</td>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr>
              <td>{char.name}</td>
              <td>{char.films.join(",") || "N/A"}</td>
              <td>{char.vehicles.join(",") || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarWars2;
