import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import * as styles from './styled';
import reactLogo from '../../logo.svg';

const Login = ({ setUserLogged, userList,fetchUsers }) => {
  const [userSelected, setUserSelected] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const logIn = () => {
    if (userSelected) {
      const userData = userList.find(({ id }) => id === userSelected)
      setUserLogged(userData)
    } 
  }

  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h2>Welcome to the Would You Rather App!</h2>
          <span>Please sign in to continue</span>
        </div>
        <img className={styles.reactLogoClass} src={reactLogo} alt="React" />
        <h3 className={styles.signInTitle}>Sign in</h3>
        <select
          className={styles.usersDropdown}
          value={userSelected}
          onChange={e => setUserSelected(e.target.value)}
        >
          <option disabled value="">
            Select User
          </option>
          {userList.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <button className={styles.buttonClass} type="button" onClick={logIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);