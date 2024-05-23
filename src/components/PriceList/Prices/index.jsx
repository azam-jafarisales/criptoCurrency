import { useState, useEffect , useContext } from "react";
import axios from "axios";
import Search from "../Search";
import IconTabs from "../IconTabs";
import PaginationControlled from "../Pagination";
import { PriceContext } from "../../../context/PriceProvider";

import styles from "./styles.module.css";

function Prices() {
  const [post, setPost , paginatedCoins, setPaginatedCoins]=useContext(PriceContext);
  console.log(post)
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
    var prevIndex = (value - 1) * 10;
    setPaginatedCoins(post.slice(prevIndex, prevIndex + 10));
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  // filter coins based on search value
  let filterCoins = post.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.livePrices_container}>
      <div className={styles.top_row}>
        <h2>Cryptocurrency Prices</h2>
        <Search search={search} onSearchChange={onSearchChange} />
      </div>
      <IconTabs post={search ? filterCoins : paginatedCoins} />
      {!search && (
        <PaginationControlled page={page} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Prices;
