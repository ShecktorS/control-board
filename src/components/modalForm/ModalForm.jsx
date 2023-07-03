import styles from "./index.module.scss";
import { useState } from "react";

const ModalForm = ({ setBranches, setFormIsVisible, branches }) => {
  const category = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [branchContext, setBranchContext] = useState({
    name: "",
    category: "all",
    location: "",
    products: [],
  });

  const onHandelSubmit = (e) => {
    e.preventDefault();
    const newBranches = [...branches, branchContext];
    setBranches(newBranches);
    localStorage.setItem("branches", JSON.stringify(newBranches));
    setBranchContext({
      name: "",
      category: "",
      location: "",
      products: [],
    });
    setFormIsVisible((prev) => !prev);
  };

  return (
    <div className={styles.ModalForm}>
      <form onSubmit={onHandelSubmit}>
        <label htmlFor="store-name">Nome dello Store</label>
        <input
          type="text"
          name="store-name"
          id="store-name"
          value={branchContext.name}
          onChange={(e) =>
            setBranchContext({ ...branchContext, name: e.target.value })
          }
          required
        />
        <label htmlFor="location">Città</label>
        <input
          type="text"
          name="location"
          id="location"
          value={branchContext.location}
          onChange={(e) =>
            setBranchContext({ ...branchContext, location: e.target.value })
          }
          required
        />
        <label htmlFor="category">Categoria</label>
        <select
          onChange={(e) =>
            setBranchContext({
              ...branchContext,
              category: e.target.value,
            })
          }
          name="category"
          id="category"
          required
        >
          {category.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div>
          <input type="submit" value="AGGIUNGI" />
          <hr />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
