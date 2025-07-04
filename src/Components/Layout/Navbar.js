import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/header-svgrepo-com.svg" alt="Logo" className="SVG" />

      <NavLink exact className="navbar-link" to="/" activeClassName="active">
        Home
      </NavLink>

      <NavLink
        exact
        className="navbar-link"
        to="/about"
        activeClassName="active"
      >
        About
      </NavLink>
      <NavLink
        exact
        className="navbar-link"
        to="/contact"
        activeClassName="active"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
