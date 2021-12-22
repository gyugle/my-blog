import styles from '../css/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h2 className={styles.title}>
        <Link to="/">GYUGLE</Link>
      </h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
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
