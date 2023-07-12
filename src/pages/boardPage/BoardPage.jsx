import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import Board from "../../components/board";
import Loader from "../../components/loader";

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

  return (
    <div className={styles.BoardPage}>
      <section className={styles.centralSection}>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Board personContext={personContext} />
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
