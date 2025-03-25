import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") return;
        onSearch(searchTerm);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Hotstar Clone</div>
            
            {/* Icons Section */}
            <nav className={styles.nav}>
                <span>Home</span>
                <span>Movies</span>
                <span>TV Shows</span>
                <span>Sports</span>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>🔍</button>
            </form>
        </header>
    );
};

export default Header;
