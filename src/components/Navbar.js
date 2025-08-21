/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/

import React from "react";
import "../App.css"; // import styles

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo on left */}
      <a href="/" className="navbar-logo">
        StreamList
      </a>

      {/* Centered menu */}
      <ul className="navbar-menu">
        <li>
          <a href="/" className="navbar-item">
            <span className="material-icons">home</span>
            <span className="navbar-text">Home</span>
          </a>
        </li>
        <li>
          <a href="/watchlist" className="navbar-item">
            <span className="material-icons">list</span>
            <span className="navbar-text">Watchlist</span>
          </a>
        </li>
        <li>
          <a href="/cart" className="navbar-item">
            <span className="material-icons">shopping_cart</span>
            <span className="navbar-text">Cart</span>
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-item">
            <span className="material-icons">info</span>
            <span className="navbar-text">About</span>
          </a>
        </li>
      </ul>

      {/* Search bar on right */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>
          <span className="material-icons">search</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
