import { useContext } from "react";
import styles from "./styles.module.css";
import { TrendCoinsContext } from "../../context/trandCoinsProvider";
function Trends() {
  const [trendCoins, setTrendCoins] = useContext(TrendCoinsContext);
  console.log(trendCoins?.coins);

  return (
    <div className={styles.container}>
      {trendCoins?.coins.map((coin) => {
        return (
          <div key={coin.item.coin_id} className={styles.containerItem}>
            <div className={styles.rank}>rank:{coin.item.market_cap_rank}</div>
            <img src={coin.item.small} />
            <span>{coin.item.id}</span>
            <span>{coin.item.data.price.toFixed(2)}$</span>
          </div>
        );
      })}
    </div>
  );
}

export default Trends;
