import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "./store";
import styles from "./App.module.scss";
import { useReducer } from "react";
import { mainReducer } from "./store/reducers";

// ------import pages and components-------
import Header from "./components/header";
import Sidebar from "./components/sidebar/Sidebar";
import { initialState } from "./store/state";

function App() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [removePadding, setRemovePadding] = useState(0);

  const [isLogged, setIsLogged] = useState(false);

  // FIXME: DA RIATTIVARE!!!
  useEffect(() => {
    const localLogin = localStorage.getItem("isLogged");
    if (localLogin) {
      setIsLogged(localLogin);
      navigate("/dashboard");
      setRemovePadding("");
    } else {
      navigate("/login");
    }
  }, [state.PersonContext.isLogged]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        {isLogged && <Sidebar />}
        <div style={{ paddingLeft: removePadding }} className={styles.content}>
          {isLogged && <Header />}
          <div className={styles.outletContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
