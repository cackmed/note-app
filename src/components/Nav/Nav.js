import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>Notes-App: a derivative app of limited ambitions</h1>

      <ul>
        <NavLink to='/' >
          <li>Notes</li>
        </NavLink>
        <NavLink to='/notesForm'>
          <li>Add a Note</li>
        </NavLink>
        <NavLink to='/auth'>
          <li>Login/Sign-Up</li>
        </NavLink>
        
      </ul>
    </nav>
  );
};
export default Nav;
