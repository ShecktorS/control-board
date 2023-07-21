import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";

const EditBranchModal = ({ thisBranch, otherBranches }) => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Context);
  const [editBranch, setEditBranch] = useState({
    name: thisBranch.name,
    location: thisBranch.location,
  });

  const [showMessage, setShowMessage] = useState("");
  const resetCondition = () => {
    dispatch({ type: "EDIT_BRANCH_CONDITION" });
    dispatch({ type: "DELETE_PRODUCT_CONDITION" });
  };

  const closeModal = (e) => {
    e.preventDefault();
    resetCondition();
    setEditBranch({
      name: thisBranch.name,
      location: thisBranch.location,
    });
  };

  const applyBranchInfo = (e) => {
    e.preventDefault();
    const newBranch = {
      ...thisBranch,
      name: editBranch.name,
      location: editBranch.location,
    };
    const newBranches = [newBranch, ...otherBranches];
    dispatch({ type: "EDIT_BRANCH_INFO", payload: newBranches });
    localStorage.setItem("branches", JSON.stringify(newBranches));
    resetCondition();
    navigate("/dashboard");
  };

  return (
    <form className={styles.EditBranchModal} onSubmit={applyBranchInfo}>
      <h3>Modifica dettagli del Branch</h3>
      <input
        type="text"
        name="branchName"
        id="branchName"
        value={editBranch.name}
        onChange={(e) => setEditBranch({ ...editBranch, name: e.target.value })}
        required
      />
      <input
        type="text"
        name="branchLocation"
        id="branchLocation"
        value={editBranch.location}
        onChange={(e) =>
          setEditBranch({ ...editBranch, location: e.target.value })
        }
        required
      />
      <div className={styles.buttons}>
        <button onClick={closeModal}>Cancella</button>
        <input
          onMouseOver={() => setShowMessage("100%")}
          onMouseOut={() => setShowMessage("0")}
          type="submit"
          value="Conferma"
        />
      </div>
      <div
        style={{
          width: showMessage,
        }}
        className={styles.message}
      >
        <p>
          Per l'applicazione delle modifiche è <br />
          necessario essere reindirizzati alla <strong>Dashboard</strong>!
        </p>
      </div>
    </form>
  );
};

export default EditBranchModal;
