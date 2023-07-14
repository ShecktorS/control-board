import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";

import { initialBranch } from "../../mocks/initialBranch";
import { BsBuildingAdd } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

import Branch from "../branch";
import ModalForm from "../modalForm";
import { Context } from "../../store";

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
  const [branches, setBranches] = useState([]);
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
    const storedBranches = JSON.parse(localStorage.getItem("branches"));
    if (!storedBranches) {
      setBranches(initialBranch);
      localStorage.setItem("branches", JSON.stringify(initialBranch));
    } else {
      setBranches(storedBranches);
    }
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

  const { state } = useContext(Context);

  return (
    <div className={styles.Board}>
      {!formIsVisible && (
        <>
          <h1
            onClick={() => {
              console.log(state.PersonContext.isLogged);
            }}
            className={styles.branches}
          >
            Dashboard
          </h1>
          <section>
            {branches.length < 1 && <h2>Non è presente alcuno store!</h2>}

            {branches.map((item, i) => (
              <Branch
                branches={branches}
                setBranches={setBranches}
                personContext={personContext}
                setProductsContext={setProductsContext}
                data={item}
                key={i}
              />
            ))}
          </section>
        </>
      )}

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

                  {personContext.type === "admin" && (
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
      )}
      {personContext.type === "admin" && (
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

      {formIsVisible && (
        <ModalForm
          setFormIsVisible={setFormIsVisible}
          setBranches={setBranches}
          branches={branches}
        />
      )}
    </div>
  );
};

export default Board;
