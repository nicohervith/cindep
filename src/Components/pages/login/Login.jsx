import React from "react";
import styles from "./styles.module.scss";
import SignIn from "./signin/SignIn";


const Login = () => {
  return (
    <div className={styles.bglogin}>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
