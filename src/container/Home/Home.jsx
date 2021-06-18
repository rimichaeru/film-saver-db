import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import FilmCard from "../../components/FilmCard";

const Home = () => {
  const [filmList, setFilmList] = useState([]);
  const [renderedFilms, setRenderedFilms] = useState([]);

  const getResults = (search) => {
    if (!search) {
      return
    }
    fetch(`http://www.omdbapi.com/?apikey=e156d28c&t&type=movie&s=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data["Search"]);
        setFilmList(data["Search"]);
      });
  };

  const renderContainerAndFilms = () => {

    const filmRender = filmList.map((film) => {
      return <FilmCard key={film.Title} film={film} />;
    });

    setRenderedFilms(<div className={styles.filmGrid}>{filmRender}</div>)
  };

  useEffect(() => {
    renderContainerAndFilms();
  }, [filmList]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OMDB Film Search</h1>
      <input type="text" placeholder="Search for film" onBlur={(e) => getResults(e.target.value)} />
      {renderedFilms}
    </div>
  );
};

export default Home;
