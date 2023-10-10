import React from "react";
import { useState, useEffect } from "react";

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

  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt="" />
      <p>{data.description}</p>
      <p>{data.price},-</p>
    </div>
  );
}

export default IndividualItem;
