import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import Board from "../../components/board";
import Sidebar from "../../components/sidebar";
import Loader from "../../components/loader";

const BoardPage = ({ personContext }) => {
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
      <h1 className={styles.header}>
        Benvenuto{" "}
        <span style={{ textDecoration: "underline" }}>
          {personContext.name}
        </span>
      </h1>
      <section className={styles.centralSection}>
        <Sidebar />
        {loader ? (
          <Loader />
        ) : (
          <>
            <hr />
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
