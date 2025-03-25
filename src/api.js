import axios from "axios";

const API_KEY = "273e7d25";
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=${API_KEY}`;


export const searchMovies = async (query = "Avengers") => {
    try {
        const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
        return response.data.Search || []; // Returns an array of movies
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};
