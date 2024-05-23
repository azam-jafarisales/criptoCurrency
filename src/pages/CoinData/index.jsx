import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LineChart from "../../components/CoinPage/LineChart";
import SelectDays from "../../components/CoinPage/SelectDays";
import Loader from "../../components/Common/Loader";
import { getPrices } from "../../functions/getPrices";
import { settingChartData } from "../../functions/settingChartData";
import { convertNumber } from "../../functions/convertNumber";
import { settingCoinObject } from "../../functions/settingCoinObject";
import Info from "../../components/CoinPage/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./styles.module.css";
function CoinData() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        settingCoinObject(response.data, setCoin);

        if (coin) {
          const prices = await getPrices(id, days, setError);
          if (prices) {
            settingChartData(setChartData, prices);
          }
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching coin data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  console.log(coin);

  return (
    <>
      {!error && !loading && coin.id ? (
        <>
          <div className={styles.grey_wrapper}>
            <div className={styles.list_item_container}>
              <img src={coin.image} alt="crypto" />
              <p className={styles.crypto_name}>
                <span>{coin.name}</span>
                <span>{coin.symbol.toUpperCase()}</span>
              </p>
              <span className={styles.prices}>
                <strong className={styles.text_bold}>Current Price :</strong> $
                {coin.current_price}
              </span>
              <span className={styles.prices}>
                <strong className={styles.text_bold}>Market Cap : </strong> $
                {convertNumber(coin.market_cap)}
              </span>
              <span className={styles.prices}>
                <strong className={styles.text_bold}>Total Volume : </strong>
                {convertNumber(coin.total_volume)}
              </span>
            </div>
          </div>
          <div className={styles.grey_wrapper}>
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <LineChart chartData={chartData} />
          </div>
          <Info title={coin.name} desc={coin.description} />
          <Link to="/">
            <ArrowBackIcon size="2em" /> Go Home
          </Link>
        </>
      ) : error ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          ></div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CoinData;
