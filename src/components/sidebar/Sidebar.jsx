import { useContext } from "react";
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

import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store";

const Sidebar = () => {
  const { state, dispatch } = useContext(Context);

  const reload = () => {
    preventError();
    localStorage.removeItem("isLogged");
    window.location.reload();
    alert("Logout eseguito con successo!");
  };

  const resetBranches = () => {
    localStorage.clear();
    reload();
    alert("I dati originali sono stati caricati correttamente");
  };
  const navigate = useNavigate();
  const preventError = () => navigate("/login");

  return (
    <div className={styles.Sidebar}>
      <ul>
        <li>
          <Link to="/dashboard">
            <span>
              <BiHomeAlt2 />
            </span>
            Dashboard
          </Link>
        </li>
        <li>
          <span>
            <BiSitemap />
          </span>
          Filiali
        </li>
        <li>
          <Link to="/prodotti">
            <span>
              <BiSolidBarcode />
            </span>
            Prodotti
          </Link>
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
          <Link to="/aiuto">
            <span>
              <BiHelpCircle />
            </span>
            Aiuto
          </Link>
        </li>
        <li
          onClick={() => {
            reload();
            dispatch({ type: "LOGOUT" });
          }}
        >
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
