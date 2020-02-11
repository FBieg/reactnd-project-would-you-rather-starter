import React from 'react';
import { cx } from 'emotion';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const Header = () => (<nav className={styles.navClass}>
    <ul className={styles.menuClass}>
      <li className={styles.listItem}>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/add">
          <span>New Question</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/leaderboard">
          <span>Leader Board</span>
        </Link>
      </li>
    </ul>

    <ul className={cx(styles.menuClass, 'login')}>
      <li className={styles.listItem}>Hello, Tyler McGinnis</li>
      <li className={styles.listItem}>
        <img
          src="https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png"
          alt="user"
        />
      </li>
      <li className={styles.listItem}>
        <button type="button">Logout</button>
      </li>
    </ul>
  </nav>);

export default Header;
