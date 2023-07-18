import styles from "./index.module.scss";
import { useState, useContext } from "react";
import { Context } from "../../store";

const ModalForm = ({ setFormIsVisible }) => {
  const category = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
    "vuoto",
  ];

  const [branchContext, setBranchContext] = useState({
    name: "",
    category: "all",
    location: "",
    products: [],
  });

  const { state, dispatch } = useContext(Context);

  const { branches } = state.PersonContext;

  const onHandelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "branches",
      JSON.stringify([...branches, branchContext])
    );
    dispatch({ type: "ADD_BRANCH", payload: branchContext });
    setBranchContext({
      name: "",
      category: "",
      location: "",
      products: [],
    });
    setFormIsVisible((prev) => !prev);
    console.log(branches);
  };

  return (
    <div className={styles.ModalForm}>
      <form onSubmit={onHandelSubmit}>
        <h2>Aggiungi un nuovo store</h2>
        <div>
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
        </div>
        <div>
          <label onClick={() => console.log(branches)} htmlFor="location">
            Città
          </label>
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
        </div>
        <div>
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
        </div>

        <div>
          <input className={styles.submit} type="submit" value="AGGIUNGI" />
          <hr />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
