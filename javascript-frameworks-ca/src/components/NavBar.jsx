import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="title">
          javascript-frameworks-ca
        </Link>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};
