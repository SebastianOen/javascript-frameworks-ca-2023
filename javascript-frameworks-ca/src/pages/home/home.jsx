import React from "react";
import "./home.css";
import ItemRow from "../../components/ItemRow";
import { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar";

export const Home = () => {
  const url = "https://api.noroff.dev/api/v1/online-shop";

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);

  const rows = data?.map((result, index) => (
    <ItemRow key={index} {...result} />
  ));

  return (
    <>
      <div className="store-title">
        <h1>Frameworks Store</h1>
      </div>

      <Searchbar />

      <div className="Container">{rows}</div>
    </>
  );
};
