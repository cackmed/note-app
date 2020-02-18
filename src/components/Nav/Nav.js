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
            <p>Notes</p>
          </NavLink>
          <NavLink to='/notesForm'>
            <p>Add a Note</p>
          </NavLink>
          <NavLink to='/auth'>
            <p>Login/Sign-Up</p>
          </NavLink>    
        </nav>
      </div>
    </>
  );
};
export default Nav;
