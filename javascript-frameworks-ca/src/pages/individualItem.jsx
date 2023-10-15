import React from "react";
import { useState, useEffect } from "react";
import "./individualItem.css";

function IndividualItem(props) {
  const queryString = document.location.search;

  const params = new URLSearchParams(queryString);

  const id = params.get("id");

  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);

  const selectedItem = {
    id: data.id,
    title: data.title,
    price: data.price,
    image: data.imageUrl,
  };

  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");

  const [cartList, setCartList] = useState(cartLocalStorage);

  const [show, setShow] = useState(false);

  return (
    <div className="itemContainer">
      <h1 className="indItemTitle">{data.title}</h1>
      <div className="itemInfoContainer">
        <img src={data.imageUrl} className="itemImage" />
        <div className="itemInfo">
          <p>{data.description}</p>
          <p>{data.price},-</p>
          <button
            className="buyButton"
            onClick={() => {
              const newList = cartList;
              setShow(true);

              newList.push(selectedItem);

              setCartList(newList);
              localStorage.setItem("cartList", JSON.stringify(newList));
            }}
          >
            Buy
          </button>
          {show && <div>Item added</div>}
        </div>
      </div>
    </div>
  );
}

export default IndividualItem;
