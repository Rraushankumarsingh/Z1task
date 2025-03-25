import React from "react";
import styles from "../styles/MovieCard.module.css";

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.card}>
            <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
            <div className={styles.title}>{movie.Title}</div>
        </div>
    );
};

export default MovieCard;
