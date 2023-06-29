import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul>
        <li>Dashboard</li>
        <li>Filiali</li>
        <li>Prodotti</li>
        <li>Impostazioni</li>
        <li>Profilo</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
