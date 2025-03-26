import React from "react";
import styles from "../styles/Header.module.css";
import { FaHome, FaFilm, FaTv, FaBasketballBall, FaStar } from "react-icons/fa"; // Import Icons

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logo}>Hotstar Clone</div>

      {/* Navigation Menu */}
      <nav className={styles.nav}>
        <span><FaHome /> Home</span>
        <span><FaFilm /> Movies</span>
        <span><FaTv /> TV Shows</span>
        <span><FaBasketballBall /> Sports</span>
        <span><FaStar /> Premium</span>
      </nav>
    </header>
  );
};

export default Header;
