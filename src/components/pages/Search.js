import React, { useState, useEffect, useRef } from "react";
import ResultCard from "../Cards/ResultCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      });
  };
  return (
    <div className="movie-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChangeHandler}
              ref={inputRef}
            />
          </div>
          {searchResults.length > 0 ? (
            <ul className="results">
              {searchResults.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          ) : (
            query !== "" && "No results."
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
