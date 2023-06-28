import { useState } from "react";
import styles from "./App.module.scss";

// ------import pages and components-------
import LoginPage from "./pages/loginPage";
import BoardPage from "./pages/boardPage";

function App() {
  const [personContext, setPersonContext] = useState({
    name: "",
    password: "",
    isLogged: false,
    type: null,
  });
  return (
    <div className={styles.App}>
      {!personContext.isLogged ? (
        <>
          <LoginPage
            setPersonContext={setPersonContext}
            personContext={personContext}
          />
        </>
      ) : (
        <>
          <BoardPage personContext={personContext} />
        </>
      )}
    </div>
  );
}

export default App;
