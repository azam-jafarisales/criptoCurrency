import Search from "../../components/PriceList/Search";
import IconTabs from "../../components/PriceList/IconTabs";

import styles from "./styles.module.css";

function Prices() {
  return (
    <div className={styles.livePrices_container}>
      <div className={styles.top_row}>
        <h2>Cryptocurrency Prices</h2>
        <Search />
      </div>
      <IconTabs />
    </div>
  );
}

export default Prices;
