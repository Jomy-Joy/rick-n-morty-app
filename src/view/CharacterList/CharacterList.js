import React, { useEffect, useState } from "react";
import "./CharacterList.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacterData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const handleCharacterDetails = (character) => {
    setSelectedCharacter(character);
  };

  const closeCharacterDetails = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <h2>Character List</h2>
      <input
        type="text"
        placeholder="Search characters"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            {selectedCharacter === character ? (
              <div>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            ) : (
              <button onClick={() => handleCharacterDetails(character)}>
                Show Details
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* {selectedCharacter && (
        <div className="character-details">
          <button onClick={closeCharacterDetails}>Dismiss</button>
          <h3>{selectedCharacter.name} Details</h3>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p>Status: {selectedCharacter.status}</p>
          <p>Species: {selectedCharacter.species}</p>
        </div>
      )} */}
    </div>
  );
};

export default CharacterList;