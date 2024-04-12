import MarketPriceItem from "./MarketPriceItem";
import styles from "./style.module.css";
import { useContext } from "react";
import { chartContext } from "../../context/ChartDataProvider";
import { ChartDataProvider } from "../../context/ChartDataProvider";
function MarketPricees() {
  const [chartData, setChartData , day , setDay] = useContext(chartContext);
 
  const prices = chartData?.prices;
  return (
    <div className={styles.marketPrices}>
      {prices?.map((item , index , array) => {
        
        return (
          <ChartDataProvider>
            <MarketPriceItem chartData={array} />
          </ChartDataProvider>
        );
      })}
    </div>
  );
}

export default MarketPricees;
