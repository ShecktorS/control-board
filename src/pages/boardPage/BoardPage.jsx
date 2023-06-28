import styles from "./index.module.scss";
import { useState, useEffect } from "react";

const BoardPage = ({ personContext }) => {
  useEffect(() => {
    // TODO: Inserire un settimout indipendente dal is logged in modo tale che scompare dopo tot secondi al montaggio del componente
  }, []);

  return <div className={styles.BoardPage}></div>;
};

export default BoardPage;
