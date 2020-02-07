import React from 'react';
import * as styles from './styled';
import reactLogo from '../../logo.svg';

const Login = () => (
  <div>
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>Welcome to the Would You Rather App!</h2>
        <span>Please sign in to continue</span>
      </div>
      <img className={styles.reactLogoClass} src={reactLogo} alt="React" />
      <h3 className={styles.signInTitle}>Sign in</h3>
      <select className={styles.usersDropdown}>
        <option disabled selected>
          Select User
        </option>
        <option>User 1</option>
        <option>User 2</option>
      </select>
      <button className={styles.buttonClass}>Sign in</button>
    </div>
  </div>
);

export default Login;
