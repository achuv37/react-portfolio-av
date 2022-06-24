import React from 'react';

function Nav() {

  return (
    <header>
      <h2>
        <a href="/">
          Aswathy
        </a>
      </h2>
      <nav className="navbar">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact">
              Contact me
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;