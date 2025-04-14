import { useEffect, useState } from "react";

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Fetching character list
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const characterList = data.results;

        // Fetch additional details using Promise.all()
        const enrichedCharacters = await Promise.all(
          characterList.map(async (character) => {
            // Fetch first episode details
            const episodeResponse = await fetch(character.episode[0]);
            const episodeData = await episodeResponse.json();

            // Fetch location details (handle empty location URLs)
            let locationName = "Unknown";
            if (character.location.url) {
              const locationResponse = await fetch(character.location.url);
              const locationData = await locationResponse.json();
              locationName = locationData.name;
            }

            return {
              ...character,
              firstEpisode: episodeData.name,
              locationName: locationName,
            };
          })
        );

        setCharacters(enrichedCharacters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Rick and Morty characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((char) => (
            <li key={char.id}>
              <h2>{char.name}</h2>
              <p>First Episode: {char.firstEpisode}</p>
              <p>Location: {char.locationName}</p>
              <img src={char.image} alt={char.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RickAndMortyApp;
