import styles from "./index.module.scss";

const Sidebar = () => {
  const reload = () => window.location.reload();

  const resetBranches = () => {
    localStorage.clear();
    reload();
  };

  return (
    <div className={styles.Sidebar}>
      <ul>
        <li>Dashboard</li>
        <li>Filiali</li>
        <li>Prodotti</li>
        <li>Impostazioni</li>
        <li>Profilo</li>
        <li onClick={reload}>Logout</li>
        <li onClick={resetBranches}>Reset</li>
      </ul>
    </div>
  );
};

export default Sidebar;
