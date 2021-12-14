import styles from '../css/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h2 className={styles.title}>GYUGLE</h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>Project</li>
          <li>Project</li>
          <li>Project</li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
