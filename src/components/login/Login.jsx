import styles from "./index.module.scss";
import { useState } from "react";

const Login = ({ setPersonContext, personContext }) => {
  const admin = { name: "admin", password: "admin" };
  const user = { name: "user", password: "user" };
  const accessRequest = (e) => {
    e.preventDefault();
    if (
      personContext.name == admin.name &&
      personContext.password == admin.password
    ) {
      setPersonContext({ ...personContext, isLogged: true, type: "admin" });
      console.table(personContext);
    } else if (
      personContext.name == user.name &&
      personContext.password == user.password
    ) {
      setPersonContext({ ...personContext, isLogged: true, type: "user" });
      console.table(personContext);
    } else {
      alert("Accesso non autorizzato");
      setPersonContext({ name: "", password: "" });
    }
  };

  return (
    <form onSubmit={accessRequest} className={styles.Login}>
      <h3>Login</h3>
      <input
        type="text"
        className={styles.username}
        placeholder="Username"
        required
        value={personContext.name}
        onChange={(e) =>
          setPersonContext({ ...personContext, name: e.target.value })
        }
      />
      <input
        type="password"
        className={styles.password}
        placeholder="Password"
        value={personContext.password}
        onChange={(e) =>
          setPersonContext({ ...personContext, password: e.target.value })
        }
        required
      />
      <span>password dimenticata?</span>

      <input type="submit" className={styles.submitButton} value="Entra" />
    </form>
  );
};

export default Login;
