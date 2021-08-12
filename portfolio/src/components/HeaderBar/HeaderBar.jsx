import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar'
import './HeaderBar.css';

function HeaderBar() {
  return (
    <div className="container">
      <HeaderNavbar />
      <h1>Ryan Nance-Donaldson</h1>
      <h2>Full Stack Software Developer</h2>
    </div>
  );
}

export default HeaderBar;