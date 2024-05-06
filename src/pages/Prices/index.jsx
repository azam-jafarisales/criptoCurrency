import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/PriceList/Search";
import IconTabs from "../../components/PriceList/IconTabs";

import styles from "./styles.module.css";

function Prices() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  }, []);
  return (
    <div className={styles.livePrices_container}>
      <div className={styles.top_row}>
        <h2>Cryptocurrency Prices</h2>
        <Search />
      </div>
      <IconTabs coins={coins} />
    </div>
  );
}

export default Prices;
