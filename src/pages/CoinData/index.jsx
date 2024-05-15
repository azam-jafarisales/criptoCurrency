import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../../components/CoinPage/Info";
import LineChart from "../../components/CoinPage/LineChart";
import SelectDays from "../../components/CoinPage/SelectDays";
import ToggleComponents from "../../components/CoinPage/ToggleComponent";
import Loader from "../../components/Common/Loader";
import { getCoinData } from "../../functions/getCoinData";
import { getPrices } from "../../functions/getPrices";
import { settingChartData } from "../../functions/settingChartData";
import { settingCoinObject } from "../../functions/settingCoinObject";
import { convertNumber } from "../../functions/convertNumber";

import styles from "./styles.module.css";
function CoinData() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    console.log("Coin DATA>>>>", coinData);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);

        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);

      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);

      setLoading(false);
    }
  };

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
              <span>
                <strong>Current Price</strong> : $
                {coin.current_price.toLocaleString()}
              </span>
              {/* <span className={className}>
        <span>
          {coin.price_change_percentage_24h > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </span>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </span> */}
              <span>
                {" "}
                <strong>Market Cap </strong>: $ {convertNumber(coin.market_cap)}
              </span>
              <span>
                <strong>Total Volume</strong> : ${" "}
                {convertNumber(coin.total_volume)}
              </span>
            </div>
          </div>
          <div className={styles.grey_wrapper}>
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <Info title={coin.name} desc={coin.desc} />
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
          >
            <a href="/dashboard">{/* <Button text="Dashboard" /> */}</a>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CoinData;
