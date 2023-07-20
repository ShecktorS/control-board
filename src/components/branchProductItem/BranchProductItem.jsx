import { useContext } from "react";
import styles from "./index.module.scss";
import { MdOutlineRemoveCircle } from "react-icons/md";

import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../../store";

const BranchProductItem = ({ product, thisBranch, otherBranches }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const { editBranch } = state.visualCondition;
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
      {editBranch && (
        <MdOutlineRemoveCircle
          onClick={onDeleteProduct}
          className={styles.removeIcon}
        />
      )}
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

      <p className={styles.price}>
        € {product.price.toString().replace(".", ",")}
      </p>
    </div>
  );
};

export default BranchProductItem;

const object = {
  id: 7,
  title: "White Gold Plated Princess",
  price: 9.99,
  /* 100 length */
  description:
    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 3,
    count: 400,
  },
};
