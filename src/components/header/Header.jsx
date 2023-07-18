import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { Context } from "../../store";

const Header = () => {
  const [onlineToggle, setOnlineToggle] = useState(0);
  const { state } = useContext(Context);
  const { name } = state.PersonContext;

  return (
    <div className={styles.Header}>
      <div className={styles.left_space}></div>
      <h1>Control Board</h1>
      <div className={styles.info_profile}>
        <img
          onClick={() =>
            setOnlineToggle(onlineToggle === 0 ? 1 : onlineToggle === 1 ? 2 : 0)
          }
          className={styles.pic_profile}
          src="https://www.360forma.com/wp-content/uploads/2021/06/Building-Manager.jpg"
          alt="pic profile"
        />
        <div className={styles.info_profile_content}>
          <h3>{name}</h3>
          <p>{name}@controlBoard.com</p>
        </div>
        <div
          className={styles.point}
          style={
            onlineToggle === 0
              ? { backgroundColor: "rgb(125, 248, 125)" }
              : onlineToggle === 1
              ? { backgroundColor: "rgb(203, 50, 50)" }
              : onlineToggle === 2
              ? { backgroundColor: "orange" }
              : {}
          }
        ></div>
      </div>
    </div>
  );
};

export default Header;
