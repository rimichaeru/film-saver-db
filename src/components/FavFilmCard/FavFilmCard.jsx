import React from "react";
import styles from "./FavFilmCard.module.scss";

const FavFilmCard = ({film}) => {

  return (
    <div className={styles.container}>
      <img src={film.Poster} alt={film.Title} />

      <div className={styles.info}>
        <h1>{film.Title}<span className={styles.year}>{film.Year}, {film.Rated}, {film.Runtime}</span></h1>
        <p style={{fontStyle: "italic"}}>{film.Genre}, Director: {film.Director}</p>
        <p style={{fontStyle: "italic"}}>{film.Actors}</p>
        <h4 style={{color: "goldenrod", margin: 20}}>{film.Plot}</h4>
        <p>Metascore: {film.Metascore}, IMDB: {film.imdbRating} ({film.imdbVotes} votes)</p>
        <p style={{color: "limegreen"}}>Box Office: {film.BoxOffice}</p>
        <a href={`https://www.imdb.com/title/${film.imdbID}/`}>See more information for {film.Title} on IMDB!</a>
      </div>
    </div>
  );
};

export default FavFilmCard;
