import styles from "./styles.module.css";
// import { PriceProvider } from "../../context/PriceProvider";
import { ChartDataProvider } from "../../context/ChartDataProvider";
import MarketPricees from "../../components/MarketPrices";
import LineChart from "../../components/PortFoilo";
// import QuickExchange from "../../components/QuickExchange";
// import MarketPriceItem from "../../components/MarketPrices/MarketPriceItem";

function Dashboard() {
  return (
    // <PriceProvider>
    //   <div className={styles.container}>
    //     <div className={styles.account}></div>
    //     <div className={styles.portflio}>
    //       <LineChart />
    //     </div>
    //     <div className={styles.balance}></div>
    //     <div className={styles.recentActivity}></div>
    //     <div className={styles.quickExchange}>
    //       <QuickExchange />
    //     </div>
        <ChartDataProvider>
        <div className={styles.marketPrice}>
          <MarketPricees/>
        </div>
        </ChartDataProvider>
    //   </div>
    // </PriceProvider>
  );
}

export default Dashboard;
