import React, { useState, useEffect } from "react";
import { searchMovies } from "../api";
import styles from "../styles/MovieList.module.css"; // ✅ Import CSS Module

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers"); // Default movie

  useEffect(() => {
    handleSearch(query); // Load default movie
  }, []);

  const handleSearch = async (searchQuery) => {
    const results = await searchMovies(searchQuery);
    setMovies(results);
  };

  return (
    <div className={styles.movieContainer}>
      {/* Search Bar */}
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value); // Search on every keypress
        }}
      />

      {/* Movie Grid */}
      <div className={styles.movieGrid}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className={styles.movieCard}>
              <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />
              <h3 className={styles.movieTitle}>{movie.Title}</h3>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
