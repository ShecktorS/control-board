import styles from "./index.module.scss";
import { useState } from "react";

const ModalForm = ({ setBranches, setFormIsVisible }) => {
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
    setBranches((prev) => [...prev, branchContext]);
    setBranchContext({
      name: "",
      category: "",
      location: "",
      products: [],
    });
    setFormIsVisible((prev) => !prev);
    console.log(branchContext);
  };

  return (
    <div className={styles.ModalForm}>
      <form onSubmit={onHandelSubmit}>
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
        <input type="submit" value="AGGIUNGI" />
      </form>
    </div>
  );
};

export default ModalForm;
