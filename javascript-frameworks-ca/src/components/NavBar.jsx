import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { BiCart } from "react-icons/bi";

export const Navbar = () => {
  if (
    localStorage.getItem("cartList") === null ||
    localStorage.getItem("cartList") === ""
  ) {
    JSON.stringify(localStorage.setItem("cartList", "[]"));
  }

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartList"))
  );

  const [totalItems, setTotalItems] = useState(cartItems.length);

  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  }, []);

  useEffect(() => {
    counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
        const itemCount = JSON.parse(localStorage.getItem("cartList"));
        if (itemCount === null) {
          JSON.stringify(localStorage.setItem("cartList", "[]"));
        }
        setTotalItems(itemCount.length);
      }, 200);
  }, []);

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
        <Link to="/cart">
          <BiCart size={30} />
          {<div className="counter">{totalItems || 0}</div>}
        </Link>
      </div>
    </div>
  );
};
