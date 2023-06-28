import styles from "./index.module.scss";
import Login from "../../components/login";

const LoginPage = ({ setPersonContext, personContext }) => {
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
