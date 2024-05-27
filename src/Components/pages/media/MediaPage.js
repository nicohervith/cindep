import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";

const MediaPage = () => {
  const { movieTitle } = useParams();

  return (
    <div>
      <div className={styles.navBarContainer}>
        <Navbar />
      </div>
      <div>
        <div>MediaPage for {movieTitle}</div>
      </div>
    </div>
  );
};

export default MediaPage;
