import React, { useEffect, useState } from "react";
import "./CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedCharacter, setExpandedCharacter] = useState(null);
  const [search, setSearch] = useState({
    page: 1,
    name: '',
    status: '',
    gender: '',
    species: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
       // const queryParams = new URLSearchParams(search);
        const data = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${search.page.toString()}&name=${search.name}&status=${search.status}&gender=${search.gender}&species=${search.species}`
        );
        if (data.ok) {
          const response = await data.json();
          setCharacters(response.results);
          setTotalPages(response.info.pages);
        }
        else {
          console.error('Error fetching character data');
        }
      } catch (error) {
        console.error('Error fetching character data', error);
      }
    };

    fetchData();
  }, [search]);
  console.log(characters)

  const handleFilter = (query) => {
    setCharacters([]);
    setSearch({ ...search, name: query, page: 1 });
  };

  const handleToggleDetails = (character) => {
    setExpandedCharacter((prevCharacter) =>
      prevCharacter?.id === character.id ? null : character
    );
  };

  const handleNextPage = () => {
    if (search.page < totalPages) {
      setSearch({ ...search, page: search.page + 1 });
    }
  };

  const handlePrevPage = () => {
    if (search.page > 1) {
      setSearch({ ...search, page: search.page - 1 });
    }
  };

  // const handleHideDetails = () => {
  //   setExpandedCharacter(null);
  // };

  const handleFilterOptions = (key, value) => {
    setCharacters([]);
    setSearch({ ...search, [key]: value, page: 1 });
  };

  return (
    <div className="ricknmorty">
      <h2>Rick & Morty </h2>
      <div className='filter-section'>
      <input
          type="text"
          placeholder="Search characters..."
          onChange={(e) => handleFilter(e.target.value)}
        />
        <div className="filter-options">
          <select
            value={search.gender}
            onChange={(e) => handleFilterOptions("gender", e.target.value)}
          >
            <option value=""> Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={search.status}
            onChange={(e) => handleFilterOptions("status", e.target.value)}
          >
            <option value="">Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={search.species}
            onChange={(e) => handleFilterOptions("species", e.target.value)}
          >
            <option value=""> Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Animal">Animal</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      

      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <div className="character-card">
                <img src={character.image} alt={character.name} />
                <div className="character-info">
                  <p>{character.name}</p>
                  <button onClick={() => handleToggleDetails(character)}>
                    Details
                  </button>
                </div>
                {expandedCharacter && expandedCharacter.id === character.id && (
                  <div className="character-details">
                    <h3>Character Details</h3>
                    <p>Name: {character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={search.page === 1}>
          Previous Page
        </button>
        <span className="page-indicator">
          {search.page}/{totalPages}
        </span>
        <button onClick={handleNextPage} disabled={search.page === totalPages}>
          Next Page
        </button>
      </div>

    </div>
  );
};


export default CharacterList;