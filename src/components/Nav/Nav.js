import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

const Nav = () => {
  return (
    <>
      <h1>Notes-App: a Derivative App of Limited Ambitions</h1>
      <div className={styles.Navbar}>
        <nav>
          <NavLink to='/' >
            <span>View Notes</span>
          </NavLink>
          <NavLink to='/notesForm'>
            <span>Add a Note</span>
          </NavLink>
          <NavLink to='/auth'>
            <span>Login/Sign-Up</span>
          </NavLink>    
        </nav>
      </div>
    </>
  );
};
export default Nav;
