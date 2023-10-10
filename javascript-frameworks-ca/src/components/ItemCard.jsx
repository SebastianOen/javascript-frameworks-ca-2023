import React, { useState } from "react";
import styles from "./ItemCard.module.css";
import { Link } from "react-router-dom";
import { Scales } from "phosphor-react";

function ItemCard(props) {
  const targetUrl = `/product?id=${props.id}`;
  const imageUrl = props.imageUrl;

  return (
    <Link to={targetUrl} className={styles.productLink}>
      <div
        role="img"
        aria-label="missing description"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: 380,
          width: 380,
        }}
      ></div>
      <div className={styles.itemInfo}>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        <p>{props.price},-</p>
      </div>
    </Link>
  );
}

export default ItemCard;
