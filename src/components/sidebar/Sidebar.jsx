import styles from "./index.module.scss";
import {
  BiHomeAlt2,
  BiSitemap,
  BiSolidBarcode,
  BiHelpCircle,
  BiUserCircle,
  BiSolidCog,
  BiExit,
  BiReset,
} from "react-icons/bi";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const reload = () => {
    window.location.reload();
    alert("Logout eseguito con successo!");
  };

  const resetBranches = () => {
    localStorage.clear();
    reload();
    alert("I dati originali sono stati caricati correttamente");
  };

  return (
    <div className={styles.Sidebar}>
      <ul>
        <li>
          <span>
            <BiHomeAlt2 />
          </span>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <span>
            <BiSitemap />
          </span>
          Filiali
        </li>
        <li>
          <span>
            <BiSolidBarcode />
          </span>
          <Link to="/prodotti">Prodotti</Link>
        </li>
        <li>
          <span>
            <BiSolidCog />
          </span>
          Impostazioni
        </li>
        <li>
          <span>
            <BiUserCircle />
          </span>
          Profilo
        </li>
        <li>
          <span>
            <BiHelpCircle />
          </span>
          Aiuto
        </li>
        <li onClick={reload}>
          <span>
            <BiExit />
          </span>
          Logout
        </li>
        <li onClick={resetBranches}>
          <span>
            <BiReset />
          </span>
          Reset
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
