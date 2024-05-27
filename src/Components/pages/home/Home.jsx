import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { backMovie, currentMovies, nextMovie } from "./hooks";
import mazerunner from "../../../assets/images/mazerunner.png";
import interestellar from "../../../assets/images/interestellar.jpg";
import AsideMenu from "./AsideMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Slider from "react-slick";

const Home = ({ classes }, props) => {
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
      title: "Interestellar",
      imageUrl: interestellar,
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

  const {
    signin,
    errors: loginErrors,
    isAuthenticated,
    setUser,
    setIsAuthenticated,
  } = useAuth();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated);
    }
  }, [isAuthenticated]);

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
          <div className={styles.catalogTitle}>
            <h2>Movies</h2>
          </div>
          <div className={styles.sliderContainer}>
            <Slider {...settings}>
              {movies.map((movie, index) => (
                <div key={index}>
                  <Link to={`/movies/${movie.title}`} className={styles.link}>
                    <Card style={{ width: 200 }} className={styles.cards}>
                      <CardMedia
                        style={{ height: 300 }}
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
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.catalogSections}>
            <div className={styles.catalogTitle}>
              <h2>Most popular</h2>
            </div>
            <div className={styles.sliderContainer}>
              <Slider {...settings}>
                {movies.map((movie, index) => (
                  <div key={index}>
                    <Link to={`/movies/${movie.title}`} className={styles.link}>
                      <Card style={{ width: 200 }} className={styles.cards}>
                        <CardMedia
                          style={{ height: 300 }}
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
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
