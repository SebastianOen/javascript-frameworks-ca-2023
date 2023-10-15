import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("cartList"))
  );
  const [items, setItems] = useState();
  const [totalWithItems, setTotalWithItems] = useState();

  console.log(itemList);

  useEffect(() => {
    const items = itemList?.map((item, index) => {
      return (
        <div className="cartItem" key={index}>
          <div className="itemTitle">{item.title} </div>
          <button
            className="removeButton"
            onClick={() => {
              itemList.splice(index, 1);
              localStorage.setItem("cartList", JSON.stringify(itemList));
              setItemList([...itemList]);
            }}
          >
            Remove
          </button>
          <div className="itemPrice">{item.price},-</div>
          <div
            role="img"
            aria-label="missing description"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 200,
              width: 200,
            }}
          ></div>
        </div>
      );
    });
    setItems(items);

    const totalWithItems = itemList?.reduce((acc, item) => {
      return acc + parseFloat(item.price);
    }, 0);
    setTotalWithItems(totalWithItems);
  }, [itemList]);

  return (
    <div className="cartListContainer">
      <div>{items}</div>
      {<div className="totalPrice">Total: {totalWithItems || 0},-</div>}
      <div className="checkoutContainer">
        <Link
          to="/checkout"
          className="toCheckout"
          onClick={() => {
            localStorage.clear("cartList");
          }}
        >
          Go to checkout
        </Link>
      </div>
    </div>
  );
};
