import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { Context } from "../../store";
import { FiEdit } from "react-icons/fi";

import BranchProductItem from "../../components/branchProductItem/BranchProductItem";
import ReturnButton from "../../components/returnButton/ReturnButton";
import EditBranchModal from "../../components/editBranchModal/EditBranchModal";
import AddProductModal from "../../components/addProductModal/AddProductModal";

const BranchPage = () => {
  const { name } = useParams();
  const { state, dispatch } = useContext(Context);
  const { PersonContext, products } = state;
  const { deleteProductCondition, editBranchCondition, addProductCondition } =
    state.visualCondition;
  const { branches } = PersonContext;
  const storedName = localStorage.getItem("namePerson");

  const [thisBranch] = branches.filter((branch) => branch.name === name);
  const otherBranches = branches.filter((branch) => branch.name != name);

  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // FIXME: Sistemare il caricamento dei prodotti nel submit del ModalForm
    if (thisBranch?.products?.length < 1) {
      thisBranch.products =
        thisBranch.category.toLowerCase() !== "all" &&
        thisBranch.category.toLowerCase() !== "vuoto"
          ? products.filter(
              (product) => product.category === thisBranch.category
            )
          : thisBranch.category.toLowerCase() === "all"
          ? products
          : [];

      const newBranches = [...otherBranches, thisBranch];
      dispatch({ type: "GET_BRANCH_PRODUCTS", payload: newBranches });
    }
  }, []);

  const addProducts = () => {
    const new2Branch = {
      ...thisBranch,
      products: [...thisBranch.products, ...selectedProducts],
    };
    const new2Branches = [...otherBranches, new2Branch];
    dispatch({ type: "ADD_PRODUCT", payload: new2Branches });
    localStorage.setItem("branches", JSON.stringify(new2Branches));
  };

  const direction = `/dashboard`;

  return (
    <div className={styles.BranchPage}>
      <div className={styles.container}>
        <div className={styles.titleBranch}>
          <img
            src="https://th.bing.com/th/id/OIG.nzDOo9OQgsLuIpILrIt6?pid=ImgGn"
            alt="Image Branch"
          />
          <h1 className={styles.branchName}>
            {name} - <em> {thisBranch?.location}</em>
          </h1>
          {storedName === "admin" && (
            <FiEdit
              onClick={() =>
                dispatch({
                  type: "DELETE_PRODUCT_CONDITION",
                })
              }
              className={styles.editSymbol}
            />
          )}
        </div>
        <div className={styles.bodyBranch}>
          <ReturnButton
            whereNavigate={direction}
            className={styles.returnButton}
          />
          <div
            className={`${styles.branchDetail} ${
              deleteProductCondition && styles.openDetail
            }`}
          >
            <button
              onClick={() =>
                dispatch({
                  type: "EDIT_BRANCH_CONDITION",
                })
              }
              style={{ opacity: deleteProductCondition ? 1 : 0 }}
              className={styles.editInfoButton}
            >
              Modifica le informazioni della filiale
            </button>
          </div>
          <div className={styles.branchProductItemContainer}>
            {thisBranch.products.map((product) => (
              <Fragment key={product.id}>
                <BranchProductItem
                  product={product}
                  thisBranch={thisBranch}
                  otherBranches={otherBranches}
                />
              </Fragment>
            ))}
            {thisBranch.products.length < 1 && (
              <p>Non è presente alcun prodotto!</p>
            )}
          </div>
        </div>
        {thisBranch.products.length > 0 && (
          <p onClick={() => dispatch({ type: "ADD_PRODUCT_CONDITION" })}>
            Numero di prodotti: {thisBranch.products.length}
          </p>
        )}
      </div>
      {storedName === "admin" && (
        <button
          onClick={() => {
            setSelectedProducts([]);
            dispatch({ type: "ADD_PRODUCT_CONDITION" });
            if (deleteProductCondition) {
              dispatch({ type: "DELETE_PRODUCT_CONDITION" });
            }
          }}
          style={{ right: addProductCondition ? "-300px" : "" }}
          className={styles.addProductButton}
        >
          Aggiungi un prodotto
        </button>
      )}

      <div
        style={{
          opacity: addProductCondition ? 1 : 0,
          zIndex: addProductCondition ? 1 : -1,
        }}
        onClick={() => dispatch({ type: "ADD_PRODUCT_CONDITION" })}
        className={styles.addproductModalContainer}
      >
        <div
          style={{
            transform: addProductCondition
              ? "translate(0)"
              : "translate(-1000px)",
          }}
          className={styles.swipeContainer}
        >
          <AddProductModal setSelectedProducts={setSelectedProducts} />
        </div>
        {selectedProducts.length >= 1 && (
          <button onClick={addProducts} className={styles.applyAddProduct}>
            Aggiungi prodotti
          </button>
        )}
      </div>

      <div
        style={{
          visibility: editBranchCondition ? "visible" : "hidden",
          zIndex: editBranchCondition ? 1 : -1,
        }}
        className={styles.editBranchModalContainer}
      >
        <EditBranchModal
          thisBranch={thisBranch}
          otherBranches={otherBranches}
        />
      </div>
    </div>
  );
};

export default BranchPage;
