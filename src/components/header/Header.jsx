import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.left_space}></div>
      <h1>Control Board</h1>
      <div className={styles.info_profile}>
        <img
          className={styles.pic_profile}
          src="https://www.360forma.com/wp-content/uploads/2021/06/Building-Manager.jpg"
          alt="pic profile"
        />
        <div className={styles.info_profile_content}>
          <h3>Adriano</h3>
          <p>adriano@pippo.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
