import styles from "./index.module.scss";

const Login = () => {
  return (
    <form action="" className={styles.Login}>
      <h3>Login</h3>
      <input
        type="text"
        className={styles.username}
        placeholder="Username"
        required
      />
      <input
        type="text"
        className={styles.password}
        placeholder="Password"
        required
      />
      <input type="submit" className={styles.submitButton} value="Entra" />
    </form>
  );
};

export default Login;
