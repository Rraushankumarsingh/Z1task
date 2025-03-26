const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();

        console.log("Received Data:", data); // Debugging console log

        return data.Search || [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};
