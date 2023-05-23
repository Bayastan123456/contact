import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Admmin</li>
        <li>Info</li>
        <li>Contact</li>
      </ul>
      <input type="search" className="navbar-inp" />
    </div>
  );
};

export default Navbar;
