import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider/UserProvider";

const NavBar = () => {

  const user = useContext(UserContext);

  return (
    <>
      <ul className={styles.container}>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/favourites" className={styles.link}>Favourites</Link>
        <button onClick={user.signIn} className={!user.user ? styles.button : styles.hidden} >Sign In</button>
        <button onClick={user.signOut} className={user.user ? styles.button : styles.hidden} >Sign Out</button>
      </ul>
    </>
  );
};

export default NavBar;
