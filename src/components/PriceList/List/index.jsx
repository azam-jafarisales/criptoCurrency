import { convertNumber } from "../../../functions/convertNumber";

import styles from "./styles.module.css";

const List = ({ coin }) => {
  return (
    <div className={styles.list_item_container}>
      <img src={coin.image} alt="crypto" />
      <p>
        <span>{coin.name}</span>
        <span>{coin.symbol}</span>
      </p>
      <span>$ {coin.current_price.toLocaleString()}</span>
      <span>{coin.price_change_percentage_24h.toFixed(2)} %</span>
      <span>{convertNumber(coin.market_cap)}</span>
      <span>{convertNumber(coin.total_volume)}</span>
      <span>{coin.circulating_supply}</span>
    </div>
  );
};

export default List;
