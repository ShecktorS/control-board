import styles from "./index.module.scss";

const Branch = ({ data, setProductsContext, setBranches, personContext }) => {
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
      <h1>{data.name}</h1>
      <hr />
      <h3>{data.location}</h3>
      <p>{data.category}</p>
      {personContext.type === "admin" && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Lo store "${data.name}" verrà eliminato`);
            setBranches((prev) =>
              prev.filter((brench) => brench.name != data.name)
            );
          }}
        >
          Elimina
        </button>
      )}
    </div>
  );
};

export default Branch;
