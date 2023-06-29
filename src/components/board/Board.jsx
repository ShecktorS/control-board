import { Fragment, useEffect, useState } from "react";
import styles from "./index.module.scss";

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
        (item.products = products.filter(
          (element) => element.category == item.category
        ))
    );
  }, [products]);

  return (
    <div className={styles.Board}>
      <h1 onClick={() => console.table(products)}>Prodotti</h1>
      {branches.map((item, i) => (
        <Fragment key={i}>
          <h1>{item.name}</h1>
        </Fragment>
        // TODO: Creare il componente delle filiali (poi passare come props l'item)
      ))}
    </div>
  );
};

export default Board;
