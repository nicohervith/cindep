import React from "react";
import styles from "./styles.module.scss";
import SignInSide from "./SignInSide";

const Login = () => {
  return (
    <div className={styles.bglogin}>
      <div className={styles.signInContainer}>
        <SignInSide />
      </div>
    </div>
  );
};

export default Login;
