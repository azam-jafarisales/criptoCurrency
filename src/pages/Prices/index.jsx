import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/PriceList/Search";
import IconTabs from "../../components/PriceList/IconTabs";
import PaginationControlled from "../../components/PriceList/Pagination";

import styles from "./styles.module.css";

function Prices() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
    var prevIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  // filter coins based on search value
  let filterCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        setPaginatedCoins(res.data.slice(0, 10));
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  }, []);
  return (
    <div className={styles.livePrices_container}>
      <div className={styles.top_row}>
        <h2>Cryptocurrency Prices</h2>
        <Search search={search} onSearchChange={onSearchChange} />
      </div>
      <IconTabs coins={search ? filterCoins : paginatedCoins} />
      {!search && (
        <PaginationControlled page={page} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Prices;
