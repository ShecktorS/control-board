import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

// ------import pages and components-------
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.content}>
        <h1>Header</h1>
        <Outlet />
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
