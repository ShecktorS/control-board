import { Fragment, useEffect, useState } from "react";
import styles from "./index.module.scss";

import Branch from "../branch";
import ModalForm from "../modalForm";

const Board = ({ personContext }) => {
  //Funzione per l'eliminazione dei prodotti all'interno del branch
  const deleteProduct = (productId, branchName) => {
    setBranches((prev) =>
      prev.map((branch) => {
        if (branch.name === branchName) {
          const updatedProducts = branch.products.filter(
            (product) => product.id !== productId
          );
          return { ...branch, products: updatedProducts };
        }
        return branch;
      })
    );
  };

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
      <h1>Prodotti</h1>
      <section>
        {branches.length < 1 && <h2>Non è presente alcuno store!</h2>}
        {!formIsVisible && (
          <>
            {branches.map((item, i) => (
              <Branch
                setBranches={setBranches}
                personContext={personContext}
                setProductsContext={setProductsContext}
                data={item}
                key={i}
              />
            ))}
          </>
        )}
      </section>

      {productsContext.isVisible && (
        <div className={styles.productsList}>
          {productsContext.payload.length < 1 ? (
            <>
              <h3>Non è presente alcun prodotto</h3>
              <p>Per favore, elimina questo store.</p>
            </>
          ) : (
            <>
              {productsContext.payload.map((product) => (
                <div key={product.id}>
                  <h1>-{productsContext.branch}-</h1>
                  <img src={product.image} />
                  <p>#{product.id}</p>
                  <h4>{product.title}</h4>
                  <p
                    onClick={() => {
                      deleteProduct(product.id, productsContext.branch);
                      setProductsContext({
                        ...productsContext,
                        payload: productsContext.payload.filter(
                          (item) => item.id != product.id
                        ),
                      });
                    }}
                    className={styles.deleteProduct}
                  >
                    cancella
                  </p>
                  <p className={styles.price}>€{product.price}</p>
                </div>
              ))}{" "}
            </>
          )}
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
