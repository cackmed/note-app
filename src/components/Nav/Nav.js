import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      
      <h1>Notes-App: a Derivative App of Limited Ambitions</h1>
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
  );
};
export default Nav;
