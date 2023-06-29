import { Fragment, useEffect, useState } from "react";
import styles from "./index.module.scss";

import Branch from "../branch";

const Board = () => {
  const [products, setProducts] = useState([]);
  const [branches, setBranches] = useState([
    {
      name: "Maxi-Store",
      category: "all",
      location: "Milano",
      products: [],
    },
    {
      name: "Store de Roma",
      category: "electronics",
      location: "Roma",
      products: [],
    },
    {
      name: "U' Store",
      category: "jewelery",
      location: "Palermo",
      products: [],
    },
  ]);
  const [productsContext, setProductsContext] = useState({
    payload: [],
    isVisible: false,
    branch: "",
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    branches.map(
      (item) =>
        (item.products =
          item.category !== "all"
            ? products.filter((element) => element.category == item.category)
            : products)
    );
  }, [products]);

  return (
    <div className={styles.Board}>
      <h1 onClick={() => console.table(products)}>Prodotti</h1>
      <section>
        {branches.map((item, i) => (
          <Branch setProductsContext={setProductsContext} data={item} key={i} />
        ))}
      </section>
      {productsContext.isVisible && (
        <div className={styles.productsList}>
          {productsContext.payload.map((product) => (
            <div>
              <h1>---{productsContext.branch}---</h1>
              <img src={product.image} />
              <p>#{product.id}</p>
              <h4>{product.title}</h4>
              <p className={styles.price}>€{product.price}</p>
            </div>
          ))}
          <button
            onClick={() =>
              setProductsContext({ ...productsContext, isVisible: false })
            }
            className={styles.closeProductsList}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
