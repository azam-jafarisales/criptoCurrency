// import { useState } from "react";
import { convertNumber } from "../../../functions/convertNumber";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles.module.css";

const List = ({ coin }) => {
  const isRed = coin.price_change_percentage_24h.toFixed(2) < 0;
  const className = isRed ? styles.red : styles.green;
  return (
    <div className={styles.list_item_container}>
      <span className={styles.list_order}>{coin.market_cap_rank}</span>
      <img src={coin.image} alt="crypto" />
      <p className={styles.crypto_name}>
        <span>{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </p>
      <span>$ {coin.current_price.toLocaleString()}</span>
      <span className={className}>
        <span>
          {coin.price_change_percentage_24h > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </span>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </span>
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
