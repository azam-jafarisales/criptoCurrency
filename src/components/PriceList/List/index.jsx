// import { useState } from "react";
import { convertNumber } from "../../../functions/convertNumber";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { chartContext } from "../../../context/ChartDataProvider";
import { Line } from "react-chartjs-2";
import {
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Chart as Chartjs,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";
Chartjs.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  [Tooltip]
);

const List = ({ coin }) => {
  const [chartData, selectedDays, setSelectedDays, getPosts, ids] =
    useContext(chartContext);
  console.log(chartData);
  useEffect(() => {
    const fetchPosts = async () => {
      for (let i = 0; i < ids.length; i++) {
        await getPosts(ids[i]);
      }
    };

    fetchPosts();
  }, [selectedDays, ...ids]);
  const renderCharts = (coinId) => {
    if (!chartData || !chartData[coinId]) return null;

    const labels = chartData[coinId].labels;
    const data = chartData[coinId].data;

    const Data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: (context) => {
            const bgColor = [
              "#0caf60",
              "rgba(54,162,235,0.2)",
              "rgba(255,206,86,0.2)",
            ];
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return;
            }
            const gradientBg = ctx.createLinearGradient(0, 200, 0, 50);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(0.5, bgColor[1]);
            gradientBg.addColorStop(1, bgColor[2]);
            return gradientBg;
          },
          data: data,
          borderColor: "#0caf60",
          pointStyle: "none",
          pointRadius: 0,
          showLine: true,
          borderWidth: 0.5,
          fill: false,
          tension: 0.4,
        },
      ],
    };
    const options = {
      dataLabels: false,
      title: null,
      plugins: {
        legend: false,
      },

      scales: {
        x: {
          display: false,
          grid: {
            display: false,
          },
          border: {
            color: "transparent",
          },
        },
        y: {
          display: false,

          ticks: {
            stepSize: 10,
            callback: (value) => "$" + value,
          },
          grid: {
            display: true,
          },
          border: {
            color: "transparent",
          },
        },
      },
    };
    return (
      <div className={styles.chart}>
        <Line data={Data} options={options} />
      </div>
    );
  };
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
      <span>{renderCharts(coin.id)}</span>
      <div className={styles.circulating_supply}>
        <span>{coin.circulating_supply.toLocaleString()}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default List;
