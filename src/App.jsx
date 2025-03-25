import React, { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css"; // Global styles

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="app">
            <Header onSearch={setSearchQuery} />
            <MovieList searchQuery={searchQuery} />
        </div>
    );
};

export default App;
