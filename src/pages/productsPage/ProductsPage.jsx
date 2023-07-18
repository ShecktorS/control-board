import { useContext } from "react";
import styles from "./index.module.scss";
import { Context } from "../../store";

import BranchProductItem from "../../components/branchProductItem/BranchProductItem";

const ProductsPage = () => {
  const { state } = useContext(Context);
  const { products } = state;

  return (
    <div className={styles.ProductsPage}>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <BranchProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
