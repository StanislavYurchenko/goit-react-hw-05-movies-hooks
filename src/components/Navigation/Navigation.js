import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      Home Page
    </NavLink>
    <NavLink
      to="/movie"
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      Movie
    </NavLink>
  </nav>
);

export default Navigation;
