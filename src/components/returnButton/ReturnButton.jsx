import styles from "./index.module.scss";
import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ReturnButton = ({ whereNavigate }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.ReturnButton}
      onClick={() => navigate(whereNavigate)}
    >
      <IoReturnDownBack />
    </button>
  );
};

export default ReturnButton;
