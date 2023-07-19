import { useContext } from "react";
import styles from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { Context } from "../../store";

const BranchProductPage = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(Context);
  const { branches } = state.PersonContext;
  const [thisBranch] = branches.filter((branch) => branch.name === name);
  const [thisProduct] = thisBranch.products.filter(
    (product) => product.id === parseInt(id)
  );

  const {
    description,
    id: productId,
    image,
    price,
    rating,
    title,
  } = thisProduct;

  let note = "";

  return (
    <div className={styles.BranchProductPage}>
      <button
        className={styles.returnBtn}
        onClick={() => navigate(`/filiali/${name}`)}
      >
        <IoReturnDownBack />
      </button>
      <div className={styles.productContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <img src={image} alt="product Image" />
          </div>
          <hr />
          <div className={styles.infoContent}>
            <h1 onClick={() => console.log(thisProduct)}>{title}</h1>
            <h2>
              Codice del prodotto: {productId} -{" "}
              <em>{Math.floor(Math.random() * 999999)} </em>
            </h2>
            <h3>€{price.toString().replace(".", ",")}</h3>
            <h2 className={styles.count}>{rating.count} recensioni</h2>
            <p>
              {" "}
              <span>Note: </span>{" "}
              {note.length > 1 ? note : "Nessuna nota disponibile"}
            </p>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default BranchProductPage;
