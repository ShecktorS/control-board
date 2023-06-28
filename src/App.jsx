import { useState } from "react";
import styles from "./App.module.scss";

// ------import pages and components-------
import LoginPage from "./pages/loginPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className={styles.App}>
      {!isLogged ? (
        <>
          <LoginPage />
        </>
      ) : (
        <h1>Board</h1>
      )}
    </div>
  );
}

export default App;
