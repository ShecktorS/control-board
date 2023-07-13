import { BiBuilding, BiBuildings } from "react-icons/bi";
import styles from "./index.module.scss";

const Branch = ({
  data,
  setProductsContext,
  setBranches,
  branches,
  personContext,
}) => {
  const onHandleClick = () => {
    console.log("clicked " + data.name);
    setProductsContext({
      payload: data.products,
      isVisible: true,
      branch: data.name,
    });
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
        {data.category === "all"
          ? "Multi"
          : data.category === "electronics"
          ? "elettronica"
          : data.category === "jewelery"
          ? "Gioielleria"
          : (data.category === "men's clothing") |
            (data.category === "women's clothing")
          ? "Vestiti"
          : ""}
      </p>
      {personContext.type === "admin" && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Lo store "${data.name}" verrà eliminato`);
            const newBranch = branches.filter(
              (branch) => branch.name != data.name
            );
            setBranches(newBranch);
            localStorage.setItem("branches", JSON.stringify(newBranch));
          }}
        >
          Elimina
        </button>
      )}
    </div>
  );
};

export default Branch;
