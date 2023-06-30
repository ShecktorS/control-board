import { Fragment, useEffect, useState } from "react";
import styles from "./index.module.scss";

import Branch from "../branch";
import ModalForm from "../modalForm";

const Board = ({ personContext }) => {
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
  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    branches
      //----Questa condizione permette di lasciare l'array dei prodotti per com'è quando è già stato riempito
      .filter((branch) => branch.products.length < 1)
      .map(
        (item) =>
          (item.products =
            item.category !== "all"
              ? products.filter((element) => element.category == item.category)
              : products)
      );
  }, [products, formIsVisible]);

  return (
    <div className={styles.Board}>
      <h1 onClick={() => console.log(products, branches)}>Prodotti</h1>
      <section>
        {branches.length < 1 && <h2>Non è presente alcuno store!</h2>}
        {branches.map((item, i) => (
          <Branch
            setBranches={setBranches}
            personContext={personContext}
            setProductsContext={setProductsContext}
            data={item}
            key={i}
          />
        ))}
      </section>
      {productsContext.isVisible && (
        <div className={styles.productsList}>
          {productsContext.payload.map((product) => (
            <div>
              <h1>-{productsContext.branch}-</h1>
              <img src={product.image} />
              <p>#{product.id}</p>
              <h4>{product.title}</h4>
              <p className={styles.deleteProduct}>cancella</p>
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
      <div className={styles.addStoreBtn}>
        <button onClick={() => setFormIsVisible((prev) => !prev)}>➕</button>
      </div>
      {formIsVisible && (
        <ModalForm
          setFormIsVisible={setFormIsVisible}
          setBranches={setBranches}
        />
      )}
    </div>
  );
};

export default Board;
