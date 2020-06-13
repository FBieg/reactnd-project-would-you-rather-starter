import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import { cx } from 'emotion';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const Header = ({ userLogout, user }) => {
  const { name, avatarURL } = user.data;

  return (
    <nav className={styles.navClass}>
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
        <li className={styles.listItem}>Hello, {name}</li>
        <li className={styles.listItem}>
          <img src={avatarURL} alt="user" />
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={userLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
