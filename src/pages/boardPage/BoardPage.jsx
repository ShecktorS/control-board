import styles from "./index.module.scss";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";

import Board from "../../components/board";
import Loader from "../../components/loader";

const BoardPage = () => {
  const { state, dispatch } = useContext(Context);
  const { loginPoupup } = state.PersonContext;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "HIDE_LOGIN_POUPUP" });
    }, 2000);
  }, []);

  return (
    <div className={styles.BoardPage}>
      <section className={styles.centralSection}>
        {loginPoupup ? <Loader /> : <Board />}
      </section>
      <div className={`${styles.poupup} ${loginPoupup && styles.showPoupup}`}>
        <p>Login eseguito correttamente!</p>
        {/* TODO: Sistemare in un componente */}
      </div>
    </div>
  );
};

export default BoardPage;
