import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";
import { initialBranch } from "../../mocks/initialBranch.js";

import { BsBuildingAdd } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

import Branch from "../branch";
import ModalForm from "../modalForm";
import { Context } from "../../store";

//TODO: Sistemare lo z-index per cliccare i branches

const Board = () => {
  const { state, dispatch } = useContext(Context);

  const { branches, type } = state.PersonContext;

  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS", payload: data }))
      .then(() => {
        console.log("Fetch");
        const storedBranches = JSON.parse(localStorage.getItem("branches"));
        if (!storedBranches) {
          dispatch({ type: "GET_BRANCHES", payload: [...initialBranch] });
          localStorage.setItem("branches", JSON.stringify(initialBranch));
        } else {
          dispatch({ type: "GET_BRANCHES", payload: [...storedBranches] });
        }
      });
  }, []);

  return (
    <div className={styles.Board}>
      <h1
        onClick={() => {
          console.log(state);
        }}
        className={styles.branches}
      >
        Dashboard
      </h1>
      <section>
        {branches.length < 1 && <h2>Non è presente alcuno store!</h2>}

        {/* -----------------------LISTA DEI BRANCHES----------------------------- */}
        {state.PersonContext.branches.map((item, i) => (
          <Branch data={item} key={i} />
        ))}
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* {productsContext.isVisible && (
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

                  {state.personContext.type === "admin" && (
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
                      elimina
                    </p>
                  )}

                  <p className={styles.price}>€{product.price}</p>
                </div>
              ))}{" "}
            </>
          )}
          <button
            onClick={() => {
              setProductsContext({ ...productsContext, isVisible: false });
              localStorage.setItem("branches", JSON.stringify(branches));
            }}
            className={styles.closeProductsList}
          >
            X
          </button>
        </div>
      )} */}

      {/* ---------Condizione che mostra pulsante per aggiunta del branches---- */}
      {/* --------------------------------------------------------------------- */}
      {type === "admin" && (
        <div className={styles.addStoreBtn}>
          <button onClick={() => setFormIsVisible((prev) => !prev)}>
            <BsBuildingAdd style={{ opacity: formIsVisible && 0 }} />
            <IoMdCloseCircle
              className={`${styles.closeModalAddStore} ${
                formIsVisible && styles.showAnimation
              }`}
            />
          </button>
        </div>
      )}

      <div
        className={`${styles.modalContainer} ${
          formIsVisible && styles.showModal
        }`}
      >
        <ModalForm setFormIsVisible={setFormIsVisible} />
      </div>
    </div>
  );
};

export default Board;
