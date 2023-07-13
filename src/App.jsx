import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";

// ------import pages and components-------
import Header from "./components/header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Inserire in questo la condizione per l'auth
    let pippo = 1;
    pippo < 1 ? navigate("/login") : navigate("/dashboard");
  }, []);

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
