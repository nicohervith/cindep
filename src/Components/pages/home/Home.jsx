import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import mazerunner from "../../../assets/images/mazerunner.png";
import AsideMenu from "./AsideMenu";

const Home = ({ classes }) => {
  const movies = [
    {
      title: "Ready player one",
      imageUrl:
        "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/653521.jpg",
    },
    {
      title: "Maze runner",
      imageUrl: mazerunner,
    },
    {
      title: "Harry Potter",
      imageUrl:
        "https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg",
    },
    {
      title: "Ready player one",
      imageUrl:
        "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/653521.jpg",
    },
    {
      title: "Maze runner",
      imageUrl: mazerunner,
    },
    {
      title: "Harry Potter",
      imageUrl:
        "https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg",
    },
  ];

  return (
    <div>
      <div className={styles.navBarContainer}>
        <Navbar />
      </div>
      <div className={styles.bgHome}>
        <div>
          <AsideMenu />
        </div>
        <div className={styles.catalogContainer}>
          <div className={styles.catalogSections}>
            <div className={styles.catalogTitle}>
              <h2>Movies</h2>
            </div>
            <div className={styles.cardContainer}>
              {movies.map((movie, index) => (
                <Card key={index} sx={{ width: 245 }} className={styles.cards}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={movie.imageUrl}
                    title={movie.title}
                  />
                  <div
                    className={styles.MovietitleContainer}
                    styles={{ background: "transparent" }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles.movieTitle}
                    >
                      {movie.title}
                    </Typography>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className={styles.catalogSections}>
            <div className={styles.catalogTitle}>
              <h2>Most popular</h2>
            </div>
            <div className={styles.cardContainer}>
              {movies.map((movie, index) => (
                <Card key={index} sx={{ width: 245 }} className={styles.cards}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={movie.imageUrl}
                    title={movie.title}
                  />
                  <div className={styles.MovietitleContainer}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles.movieTitle}
                    >
                      {movie.title}
                    </Typography>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
