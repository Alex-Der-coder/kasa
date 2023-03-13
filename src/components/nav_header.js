import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className={location.pathname === "/" && !location.state ? "active" : ""}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
