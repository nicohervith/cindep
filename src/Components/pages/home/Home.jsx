import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.bgHome}>Home</div>
    </div>
  );
};

export default Home;
