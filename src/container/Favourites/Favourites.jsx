import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.scss";
import { firestore } from "../../firebase";
import FavFilmCard from "../../components/FavFilmCard";

const Favourites = () => {
  const [renderedFavFilms, setRenderedFavFilms] = useState([]);


  const getFavFilms = () => {
    firestore
      .collection("favourites")
      .get()
      .then((query) => {
        const filmList = [];
        query.forEach((document) => {
          filmList.push(document.data());
        });

        getAllInfo(filmList);
      })

  };


  const getAllInfo = (filmList) => {

    const filmRenders = filmList.map((film) => {
      return <FavFilmCard key={film.imdbID} film={film} />
    })

    setRenderedFavFilms(
      <div className={styles.filmContainer}>{filmRenders}</div>
    );
  };

  useEffect(() => {
    getFavFilms();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Saved Movies</h1>
      {renderedFavFilms}
    </div>
  );
};

export default Favourites;
