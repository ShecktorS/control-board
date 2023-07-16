import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import Board from "../../components/board";
import Loader from "../../components/loader";

const BoardPage = () => {
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
        {loader ? <Loader /> : <Board />}
      </section>
      <div className={`${styles.poupup} ${showMsg && styles.showPoupup}`}>
        <p>Login eseguito correttamente!</p>
        {/* TODO: Sistemare in un componente */}
      </div>
    </div>
  );
};

export default BoardPage;
