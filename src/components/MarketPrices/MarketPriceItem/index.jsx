import styles from "./style.module.css";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { httpClient } from "../../../services/http";
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

function MarketPriceItem({ item }) {
  const ids = ["bitcoin", "conflux-token"];
  const initialSelectedDays = ids.reduce((acc, id) => {
    acc[id] = 1;
    return acc;
  }, {});
  const [posts, setPosts] = useState({});
  const [selectedDays, setSelectedDays] = useState(initialSelectedDays);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  function getPosts(id) {
    httpClient
    .get(`coins/${id}/market_chart?vs_currency=usd&days=${selectedDays[id]}`)
    .then((response) => {
   
           setPosts((prevState) => ({
        ...prevState,
        [id]: {
          labels: response.prices.map((item) => item[0]),
          data: response.prices.map((item) => item[1]),
        },
      }));
    })
    .catch((error) => {
      setHasError(error);
    });
  }
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      for (let i = 0; i < ids.length; i++) {
        await getPosts(ids[i]);
      }
    };

    fetchPosts();
  }, [selectedDays]);

  console.log(selectedDays);
  const renderCharts = (labels, data) => {
    if (!labels || !data) return null; 

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

  return (
    <div>
      <div className={styles.marketPrices}>
        {Object.keys(posts).map((key) => (
          <div className={styles.MarketItem}>
            <div className={styles.titles}>
              <div className={styles.cripto}>
                <div></div>
                <div>
                  <h2>{key}</h2>
                </div>
              </div>
              <select
                onChange={(e) => {
                  setSelectedDays((prevDays) => ({
                    ...prevDays,
                    [key]: e.target.value,
                  }));
                  console.log(selectedDays);
                }}
                name=""
              >
                <option value="1">1</option>
                <option value="7">7</option>
                <option value="30">30</option>
              </select>
            </div>
            {renderCharts(posts[key]?.labels, posts[key]?.data)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPriceItem;
