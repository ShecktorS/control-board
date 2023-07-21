import { useContext } from "react";
import styles from "./index.module.scss";
import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store";

const ReturnButton = ({ whereNavigate }) => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  return (
    <button
      className={styles.ReturnButton}
      onClick={() => {
        navigate(whereNavigate);
        dispatch({
          type: "DELETE_PRODUCT_CONDITION",
          payload: false,
        });
      }}
    >
      <IoReturnDownBack />
    </button>
  );
};

export default ReturnButton;
