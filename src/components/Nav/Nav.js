import React from 'react';

import './Nav.css';
import Logo from '../../assets/shared/logo.svg';

const Nav = () => {
  return (
    <>
      <div className="container-nav">
        <nav>
          <img src={Logo} alt="Logo"></img>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/destination">DESTINATION</a>
            </li>
            <li>
              <a href="/crew">CREW</a>
            </li>
            <li>
              <a href="/technology">TECHNOLOGY</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
