import { Fragment, useContext, useEffect } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { Context } from "../../store";
import { FiEdit } from "react-icons/fi";

import BranchProductItem from "../../components/branchProductItem/BranchProductItem";
import ReturnButton from "../../components/returnButton/ReturnButton";

const BranchPage = () => {
  const { name } = useParams();
  const { state, dispatch } = useContext(Context);
  const { PersonContext, products } = state;
  const { branches } = PersonContext;

  const [thisBranch] = branches.filter((branch) => branch.name === name);
  const otherBranches = branches.filter((branch) => branch.name != name);

  useEffect(() => {
    if (thisBranch?.products?.length < 1) {
      thisBranch.products =
        thisBranch.category.toLowerCase() !== "all" && "vuoto"
          ? products.filter(
              (product) => product.category === thisBranch.category
            )
          : thisBranch.category.toLowerCase() === "all"
          ? products
          : thisBranch.category.toLowerCase() !== "vuoto"
          ? []
          : "";

      const newBranches = [...otherBranches, thisBranch];
      dispatch({ type: "GET_BRANCH_PRODUCTS", payload: newBranches });
    }
  }, []);

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
          <FiEdit
            onClick={() =>
              dispatch({
                type: "EDIT_BRANCH_DETAILS",
                payload: state.visualCondition.editBranch ? false : true,
              })
            }
            className={styles.editSymbol}
          />
        </div>
        <div className={styles.bodyBranch}>
          <ReturnButton
            whereNavigate={direction}
            className={styles.returnButton}
          />
          <div className={styles.branchDetail}>
            <p onClick={() => console.log(state)}>{thisBranch?.location} </p>
            <p>Numero di prodotti: {thisBranch.products.length || ""}</p>
            {/* TODO: Sistemare aggiungendo un'animazione che espone i dettagli del branch ed eventualmente autorizza la modifica */}
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
      </div>
      <button>Aggiungi un prodotto</button>
    </div>
  );
};

export default BranchPage;
