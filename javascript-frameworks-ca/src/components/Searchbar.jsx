import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

function Searchbar(props) {
  const [input, setInput] = useState("");

  const listItems = props.data
    ?.filter((item) => item?.title.toLowerCase().includes(input.toLowerCase()))
    .map((item) => (
      <Link to={`/product?id=${item.id}`}>
        {item.title}
        <div
          role="img"
          aria-label="missing description"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 50,
            width: 50,
          }}
        ></div>
      </Link>
    ));

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchBar}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <div className={styles.searchResults}>
        {!!input ? (
          <div className={styles.list}>{listItems}</div>
        ) : (
          <div className={styles.list}>
            <p className={styles.notFound}>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
