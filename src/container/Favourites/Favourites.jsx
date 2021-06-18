import React, { useContext, useEffect, useState } from "react";
import styles from "./Favourites.module.scss";
import { firestore } from "../../firebase";
import FavFilmCard from "../../components/FavFilmCard";
import { UserContext } from "../../context/UserProvider/UserProvider";

const Favourites = () => {
  const [renderedFavFilms, setRenderedFavFilms] = useState([]);

  const user = useContext(UserContext);

  const getFavFilms = () => {
    if (!user.user) {
      return
    }

    firestore
      .collection("favourites")
      .doc(user.user.uid).collection("films")
      .get()
      .then((query) => {
        const filmList = [];
        query.forEach((document) => {
          filmList.push(document.data());
        });

        getAllInfo(filmList);
      });
  };

  const getAllInfo = (filmList) => {
    const filmRenders = filmList.map((film) => {
      return <FavFilmCard key={film.imdbID} film={film} />;
    });

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
      {user.user ? renderedFavFilms : <h1>Please Sign In!</h1>}
    </div>
  );
};

export default Favourites;
