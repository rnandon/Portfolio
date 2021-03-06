import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar'
import './HeaderBar.css';

function HeaderBar() {
  return (
    <div className="container" fluid className="m-0 p-0">
      <div className="row my-5 p-0 mx-0">
          <h1 className="display-1 text-center mx-0 p-0 limit-width">Ryan Nance-Donaldson</h1>
          <h2 className="display-6 text-center text-muted mx-0 p-0 limit-width">Full Stack Software Developer</h2>
      </div>
    </div>
  );
}

export default HeaderBar;