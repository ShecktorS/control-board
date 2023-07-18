import { BiBuilding, BiBuildings } from "react-icons/bi";
import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Branch = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const { type, branches } = state.PersonContext;

  const navigate = useNavigate();

  const onHandleClick = () => {
    console.log("clicked " + data.name);
    navigate(`/filiali/${data.name}`);
  };

  const onHandleDeleteBranch = (e) => {
    e.stopPropagation();
    alert(`Lo store "${data.name}" verrà eliminato`);
    const newBranch = branches.filter((branch) => branch.name !== data.name);
    dispatch({ type: "DELETE_BRANCH", payload: newBranch });
    localStorage.setItem("branches", JSON.stringify(newBranch));
  };

  return (
    <div onClick={onHandleClick} className={styles.Branch}>
      <h1>
        {(data.location.toLowerCase() === "milano") |
        (data.location.toLowerCase() === "roma") |
        (data.location.toLowerCase() === "palermo") ? (
          <BiBuildings />
        ) : (
          <BiBuilding />
        )}
        {" " + data.name}
      </h1>
      <hr />
      <h3>{data.location}</h3>
      <p>
        {(data.category === "all") | "vuoto"
          ? "Vario"
          : data.category === "electronics"
          ? "elettronica"
          : data.category === "jewelery"
          ? "Gioielleria"
          : (data.category === "men's clothing") |
            (data.category === "women's clothing")
          ? "Vestiti"
          : ""}
      </p>
      {type === "admin" && (
        <button onClick={(e) => onHandleDeleteBranch(e)}>Elimina</button>
      )}
    </div>
  );
};

export default Branch;
