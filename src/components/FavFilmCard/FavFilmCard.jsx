import React from "react";
import styles from "./FavFilmCard.module.scss";

const FavFilmCard = ({film}) => {


  return (
    <div className={styles.container}>
      <img src={film.image} alt={film["movie-name"]} />

      <div className={styles.info}>
        <h1>{film["movie-name"]}<span className={styles.year}>{film.year}</span></h1>
      </div>
    </div>
  );
};

export default FavFilmCard;
