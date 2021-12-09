import styles from '../css/navbar.module.css';
function Navbar() {
  return (
    <div>
      <h2 className={styles.title}>GYUGLE</h2>
      <nav>
        <ul className={styles.navList}>
          <li>HOME</li>
          <li>Project</li>
          <li>Project</li>
          <li>Project</li>
          <li>Project</li>
          <li>About me</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
