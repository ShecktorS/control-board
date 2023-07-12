import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

// ------import pages and components-------
import Header from "./components/header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
