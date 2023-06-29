import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import Board from "../../components/board";
import Sidebar from "../../components/sidebar";

const BoardPage = ({ personContext }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.BoardPage}>
      <h1 className={styles.header}>
        Welcome{" "}
        <span style={{ textDecoration: "underline" }}>
          {personContext.name}
        </span>
      </h1>
      {loader ? (
        <p style={{ textAlign: "center", fontSize: "2em" }}>Caricamento...</p>
      ) : (
        <section className={styles.centralSection}>
          <Sidebar />
          <hr />
          <Board />
        </section>
      )}
    </div>
  );
};

export default BoardPage;
