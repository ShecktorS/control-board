import styles from "./index.module.scss";

import { useParams } from "react-router-dom";

import MiniProductToAdd from "../miniProductToAdd/MiniProductToAdd";
import { useContext } from "react";
import { Context } from "../../store";

const AddProductModal = () => {
  const { name } = useParams();
  const { state } = useContext(Context);
  const { products } = state;
  const { branches } = state.PersonContext;
  const [thisBranch] = branches.filter((branch) => branch.name == name);
  const otherBranches = branches.filter((branch) => branch.name != name);

  const getDiffArr = () => {
    const productsnotFound = [];
    for (const product of products) {
      if (
        !thisBranch.products.some(
          (product2) => product2.title === product.title
        )
      ) {
        productsnotFound.push(product);
      }
    }
    return productsnotFound;
  };

  return (
    <div
      onClick={() => console.log(getDiffArr())}
      className={styles.AddProductModal}
    >
      {getDiffArr().map((product, i) => (
        <MiniProductToAdd key={i} product={product} />
      ))}
    </div>
  );
};

export default AddProductModal;
