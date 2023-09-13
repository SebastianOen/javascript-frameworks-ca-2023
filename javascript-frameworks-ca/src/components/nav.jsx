import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart as CartIcon } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <CartIcon size={30} />
        </Link>
      </div>
    </div>
  );
};
