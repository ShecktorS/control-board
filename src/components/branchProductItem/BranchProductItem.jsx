import { useContext } from "react";
import styles from "./index.module.scss";
import { MdOutlineRemoveCircle } from "react-icons/md";

import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../../store";

const BranchProductItem = ({ product, thisBranch, otherBranches }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const { deleteProductCondition } = state.visualCondition;
  const { branches } = state.PersonContext;

  const onDeleteProduct = (e) => {
    e.stopPropagation();
    const newProducts = thisBranch.products.filter(
      (object) => object.id != product.id
    );
    const updateBranch = { ...thisBranch, products: newProducts };
    const newBranches = [...otherBranches, updateBranch];
    dispatch({ type: "DELETE_PRODUCT", payload: newBranches });
    localStorage.setItem("branches", JSON.stringify(newBranches));
  };

  const onHandleClick = () => {
    if (location.pathname === "/prodotti") {
      alert(
        "Per la pagina relativa al prodotto recati prima nella pagina della filiale!"
      );
    } else {
      navigate(`prodotti/${product.id}`);
      console.log(location);
    }
  };

  return (
    <div onClick={onHandleClick} className={styles.BranchProductItem}>
      <MdOutlineRemoveCircle
        style={{ width: deleteProductCondition ? "20px" : "0px" }}
        onClick={onDeleteProduct}
        className={styles.removeIcon}
      />

      <img src={product.image} alt="product Image" />
      <div className={styles.textContainer}>
        <p className={styles.title}>
          {product.title.length > 36
            ? product.title.slice(0, 34) + "..."
            : product.title}
        </p>
        {/* <p className={styles.description}>
          {product.description.length > 100 &&
            product.description.slice(0, 60) + "..."}
        </p> */}
      </div>

      <p className={styles.price}>€ {parseInt(product.price)}</p>
    </div>
  );
};

export default BranchProductItem;
