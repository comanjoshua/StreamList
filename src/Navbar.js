/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle, FaCog } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">StreamList</div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/"><FaHome /> Home</NavLink>
        <NavLink to="/movies"><FaFilm /> Movies</NavLink>
        <NavLink to="/cart"><FaShoppingCart /> Cart</NavLink>
        <NavLink to="/about"><FaInfoCircle /> About</NavLink>
        <NavLink to="/settings"><FaCog /> Settings</NavLink>
      </div>

      {/* Search */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
}
