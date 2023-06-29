import styles from "./index.module.scss";

const Branch = ({ data, setProductsContext }) => {
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
    </div>
  );
};

export default Branch;
