import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "./ItemCard";
import styles from "./ItemRow.module.css";

function ItemRow(props) {
  console.log(props.columns);
  return <ItemCard {...props} />;

  const columns = props?.map((item, index) => (
    <Col key={index}>
      <ItemCard {...item} />
    </Col>
  ));

  return (
    <div>
      <Row className={styles.RowStyle}>{columns}</Row>
    </div>
  );
}

export default ItemRow;
