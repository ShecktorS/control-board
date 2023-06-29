import styles from "./index.module.scss";
import { useState } from "react";

const ModalForm = ({ setBranches }) => {
  const category = [
    "all",
    "eletronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [branchContext, setBranchContext] = useState({
    name: "",
    category: "",
    location: "",
    products: [],
  });

  return (
    <div className={styles.ModalForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBranches((prev) => [...prev, branchContext]);
        }}
      >
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
        <select name="" id="" required>
          {category.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <input type="submit" value="AGGIUNGI" />
      </form>
    </div>
  );
};

export default ModalForm;
