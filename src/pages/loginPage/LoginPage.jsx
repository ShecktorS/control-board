import styles from "./index.module.scss";
import Login from "../../components/login";

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <Login />
    </div>
  );
};

export default LoginPage;
