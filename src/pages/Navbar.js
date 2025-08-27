/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/

// Navbar.js
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white p-4">
      <h2 className="font-bold text-lg">StreamList</h2>
      <ul className="flex gap-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Favorites</li>
        <li className="hover:underline cursor-pointer">Completed</li>
        <li className="hover:underline cursor-pointer">Settings</li>
      </ul>
    </nav>
  );
};
