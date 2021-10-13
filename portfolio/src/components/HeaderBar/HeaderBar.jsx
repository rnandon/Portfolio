import React from 'react';
import './HeaderBar.css';

function HeaderBar() {
  return (
    <div className="container-fluid my-5">
          <h1 className="display-1 text-center mx-0 p-0 limit-width">Ryan Nance-Donaldson</h1>
          <h2 className="display-6 text-center text-muted mx-0 p-0 limit-width">Full Stack Software Developer</h2>
    </div>
  );
}

export default HeaderBar;