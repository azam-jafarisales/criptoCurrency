// import styles from "./styles.module.css";
// import { useState } from "react";
import { convertNumber } from "../../../functions/convertNumber";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles.module.css";

const Grid = ({ coin }) => {
  const isRed = coin.price_change_percentage_24h.toFixed(2) < 0;
  const className = isRed ? styles.red : styles.green;
  return (
    <div className={styles.grid_item_container}>
      <div className={styles.crypto_heading}>
        <img src={coin.image} alt="crypto" />
        <p className={styles.crypto_name}>
          <span>{coin.name}</span>
          <span>{coin.symbol.toUpperCase()}</span>
        </p>
      </div>
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
      <span>
        <strong>Market Cap</strong> : $ {convertNumber(coin.market_cap)}
      </span>
      <span>
        <strong>Total Volume</strong> : $ {convertNumber(coin.total_volume)}
      </span>
      <div className={styles.circulating_supply}>
        <span>{coin.circulating_supply.toLocaleString()}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Grid;
