import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className={styles.container}>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/favourites" className={styles.link}>Favourites</Link>
      </ul>
    </>
  );
};

export default NavBar;
