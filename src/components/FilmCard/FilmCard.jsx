import React, { useContext, useEffect, useState } from "react";
import styles from "./FilmCard.module.scss";
import { Icon, InlineIcon } from "@iconify/react";
import starFill from "@iconify/icons-bi/star-fill";
import { firestore } from "../../firebase";
import { UserContext } from "../../context/UserProvider/UserProvider";

const FilmCard = ({ film }) => {
  const [isFav, setIsFav] = useState(false);

  const user = useContext(UserContext);
  console.log(user.user.uid);


  const addToFav = () => {
    setIsFav(true);
  };

  useEffect(() => {
    if (isFav) {
      fetch(`https://www.omdbapi.com/?apikey=e156d28c&i=${film.imdbID}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          firestore.collection("favourites").doc(user.user.uid).collection("films").add(data);
        });
    }
  }, [isFav]);

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
