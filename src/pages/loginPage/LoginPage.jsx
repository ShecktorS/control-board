import styles from "./index.module.scss";
import Login from "../../components/login";
import { useState } from "react";

const LoginPage = () => {
  const [personContext, setPersonContext] = useState({
    name: "",
    password: "",
    isLogged: false,
    type: null,
  });

  return (
    <div className={styles.LoginPage}>
      <Login
        setPersonContext={setPersonContext}
        personContext={personContext}
      />
    </div>
  );
};

export default LoginPage;
