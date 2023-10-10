import React from "react";
import styles from "./SearchBar.module.css";

function Searchbar(props) {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" className={styles.searchBar} placeholder="Search..." />
    </div>
  );
}

export default Searchbar;
