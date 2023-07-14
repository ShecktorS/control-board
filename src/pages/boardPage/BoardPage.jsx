import styles from "./index.module.scss";
import { useState, useEffect, useReducer, useContext } from "react";

import Board from "../../components/board";
import Loader from "../../components/loader";
import { Context } from "../../store";
import { mainReducer } from "../../store/reducers";
import { initialState } from "../../store/state";

const BoardPage = () => {
  const [personContext] = useState({
    name: "admin",
    password: "admin",
    isLogged: true,
    type: "admin",
  });

  const [showMsg, setShowMsg] = useState(true);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setShowMsg(false);
    }, 2000);
  }, []);
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.BoardPage}>
      <section className={styles.centralSection}>
        {loader ? (
          <Loader />
        ) : (
          <>
            {/* <h3>{state.PersonContext.test}</h3> */}
            <Board personContext={personContext} />
            <p onClick={() => dispatch({ type: "LOGIN_ADMIN" })}>pippo</p>
          </>
        )}
      </section>
      <div className={`${styles.poupup} ${showMsg && styles.showPoupup}`}>
        <p>Login eseguito correttamente!</p>
      </div>
    </div>
  );
};

export default BoardPage;
