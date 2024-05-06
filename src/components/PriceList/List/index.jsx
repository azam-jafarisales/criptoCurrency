// import { useState } from "react";
import { convertNumber } from "../../../functions/convertNumber";

import styles from "./styles.module.css";

const List = ({ coin }) => {
  return (
    <div className={styles.list_item_container}>
      <span>{coin.market_cap_rank}</span>
      <img src={coin.image} alt="crypto" />
      <p className={styles.crypto_name}>
        <span>{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </p>
      <span>$ {coin.current_price.toLocaleString()}</span>
      <span>{coin.price_change_percentage_24h.toFixed(2)} %</span>
      <span>$ {convertNumber(coin.market_cap)}</span>
      <span>$ {convertNumber(coin.total_volume)}</span>
      <div className={styles.circulating_supply}>
        <span>{coin.circulating_supply.toLocaleString()}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default List;
