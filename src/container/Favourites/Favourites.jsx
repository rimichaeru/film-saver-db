import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.scss";
import { firestore } from "../../firebase";
import FavFilmCard from "../../components/FavFilmCard";

const Favourites = () => {

  const [renderedFavFilms, setRenderedFavFilms] = useState([]);

  const getFavFilms = () => {
    firestore.collection("favourites").get().then((query) => {
      const favFilmList = [];
      query.forEach((document) => {
        favFilmList.push(document.data());
      })
      renderFilms(favFilmList);
    })
  }

  useEffect(() => {
    getFavFilms();
  }, [])


  const renderFilms = (favFilms) => {
    const renderFilmList = favFilms.map((film) => {
      return <FavFilmCard key={film["movie-name"]} film={film} />
    })

    setRenderedFavFilms(<div className={styles.filmContainer}>{renderFilmList}</div>);
  }





  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Saved Movies</h1>
      {renderedFavFilms}
    </div>
  );
};

export default Favourites;
