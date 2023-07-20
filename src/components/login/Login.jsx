import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../store/index";

const Login = () => {
  const [person, setPerson] = useState({ name: "", password: "" });

  const navigate = useNavigate("/");
  const { state, dispatch } = useContext(Context);

  const admin = { name: "admin", password: "admin" };
  const user = { name: "user", password: "user" };
  const auth = [admin, user];

  const setLocalLogin = () => localStorage.setItem("isLogged", true);

  const accessRequest = (e) => {
    e.preventDefault();
    if (person.name === auth[0].name && person.password === auth[0].password) {
      localStorage.setItem("namePerson", auth[0].name);
      dispatch({ type: "LOGIN_ADMIN" });
      dispatch({ type: "SHOW_LOGIN_POUPUP" });
      navigate("/dashboard");
      console.log("Richiesta admin", state);
      setLocalLogin();
    } else if (
      person.name === auth[1].name &&
      person.password === auth[1].password
    ) {
      dispatch({ type: "LOGIN_USER" });
      dispatch({ type: "SHOW_LOGIN_POUPUP" });
      localStorage.setItem("namePerson", auth[1].name);

      navigate("/dashboard");
      console.log("Richiesta user");
      setLocalLogin();
    } else {
      alert("Accesso non autorizzato");
      setPerson({ name: "", password: "" });
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
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="password"
        className={styles.password}
        placeholder="Password"
        value={person.password}
        onChange={(e) => setPerson({ ...person, password: e.target.value })}
        required
      />
      <span>password dimenticata?</span>

      <input type="submit" className={styles.submitButton} value="Entra" />
      <p className={styles.nota}>
        Se riscontri problemi di accesso contatta l'amministratore
      </p>
    </form>
  );
};

export default Login;
