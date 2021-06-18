import React, { useState } from "react";
import styles from "./FilmCard.module.scss";
import { Icon, InlineIcon } from "@iconify/react";
import starFill from '@iconify/icons-bi/star-fill';
import {firestore} from "../../firebase";

const FilmCard = ({ film }) => {
  const [isFav, setIsFav] = useState(false);

  const addToFav = () => {
    setIsFav(true);
    firestore.collection("favourites").add({"movie-name":film.Title, "year":film.Year, "image":film.Poster, "imdbID":film.imdbID})
  }


  return (
    <div className={styles.cardContainer}>
      <div className={styles.starContainer}>
        <Icon
          icon={starFill}
          style={{ fontSize: "24px" }}
          className={isFav ? styles.starFav : styles.starUnfav}
          onClick={addToFav}
        />
      </div>

      <div className={styles.info}>
        <h3>{film.Title}</h3>
        <p>{film.Year}</p>
      </div>
      <img src={film.Poster} alt="" />
    </div>
  );
};

export default FilmCard;
