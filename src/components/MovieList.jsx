import React, { useEffect, useState } from "react";
import { searchMovies } from "../api";
import MovieCard from "./MovieCard";
import styles from "../styles/MovieList.module.css";

const MovieList = ({ searchQuery }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch Movies (default or searched)
    const fetchMovies = async (query = "Avengers") => {
        setLoading(true);
        const results = await searchMovies(query);
        setMovies(results);
        setLoading(false);
    };

    // Load default movies on mount
    useEffect(() => {
        fetchMovies();
    }, []);

    // Fetch when searchQuery changes
    useEffect(() => {
        if (searchQuery) {
            fetchMovies(searchQuery);
        }
    }, [searchQuery]);

    return (
        <div className={styles.movieList}>
            {loading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                <div className={styles.grid}>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))
                    ) : (
                        <p>No movies found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MovieList;
