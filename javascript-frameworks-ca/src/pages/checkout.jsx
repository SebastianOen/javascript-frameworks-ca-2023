import React from "react";
import { Link } from "react-router-dom";
import "./checkout.css";

function Checkout(props) {
  return (
    <div className="thanks">
      <h1>Thanks for your purchase!</h1>
      <Link to="/" className="back">
        Back home
      </Link>
    </div>
  );
}

export default Checkout;
