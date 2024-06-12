import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";
import ReactPlayer from "react-player";

const MediaPage = () => {
  const { movieTitle } = useParams();
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || "";

  console.log(videoUrl);
  console.log(`Rendering MediaPage for ${movieTitle} with URL ${videoUrl}`);

  return (
    <div className={styles.bgMediaPage}>
      <div className={styles.navBarContainer}>
        <Navbar />
      </div>
      <div>
        <div className={styles.playerReproductor}>
          <div className={styles.playerContainer}>
            <div className={styles.playerWrapper}>
              <div className={styles.playerWrapper}>
                {videoUrl ? (
                  <ReactPlayer
                    className={styles.reactPlayer}
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div>
              <div className={styles.movieTitle}>
                <h2> {movieTitle}</h2>
              </div>
            </div>
          </div>
          <div>
            <h3>chat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
