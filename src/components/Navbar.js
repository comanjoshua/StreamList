/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/

import { Link } from "react-router-dom";
import "./Navbar.css"; // optional: for additional styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">StreamList</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <span className="material-icons">home</span>
          Home
        </Link>
        <Link to="/movies" className="nav-link">
          <span className="material-icons">movie</span>
          Movies
        </Link>
        <Link to="/cart" className="nav-link">
          <span className="material-icons">shopping_cart</span>
          Cart
        </Link>
        <Link to="/about" className="nav-link">
          <span className="material-icons">info</span>
          About
        </Link>
      </div>
    </nav>
  );
}
