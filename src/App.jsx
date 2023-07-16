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
  const { isLogged } = state.PersonContext;

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
      setRemovePadding("");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        {isLogged && <Sidebar />}
        <div style={{ paddingLeft: removePadding }} className={styles.content}>
          {isLogged && <Header />}

          <Outlet />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
