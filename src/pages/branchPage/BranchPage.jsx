import { useContext, useEffect } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { Context } from "../../store";

const BranchPage = () => {
  const { name } = useParams();
  const { state, dispatch } = useContext(Context);
  const { PersonContext, products } = state;
  const { branches } = PersonContext;

  const [thisBranch] = branches.filter((branch) => branch.name === name);

  useEffect(() => {
    if (thisBranch.products.length < 1) {
      thisBranch.products =
        (thisBranch.category.toLowerCase() !== "all") & "vuoto"
          ? products.filter(
              (product) => product.category === thisBranch.category
            )
          : thisBranch.category.toLowerCase() === "all"
          ? products
          : thisBranch.category.toLowerCase() !== "vuoto"
          ? []
          : "";
      const otherBranches = branches.filter((branch) => branch.name != name);
      const newBranches = [...otherBranches, thisBranch];
      dispatch({ type: "GET_BRANCH_PRODUCTS", payload: newBranches });
    }
  }, []);

  return (
    <div className={styles.BranchPage}>
      <div className={styles.container}>
        <div className={styles.titleBranch}>
          <img
            src="https://th.bing.com/th/id/OIG.nzDOo9OQgsLuIpILrIt6?pid=ImgGn"
            alt="Image Branch"
          />
          <h1 className={styles.branchName}>{name}</h1>
        </div>
        <div className={styles.bodyBranch}>
          <div className={styles.branchDetail}>
            <p onClick={() => console.log(state)}>Branch details </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
