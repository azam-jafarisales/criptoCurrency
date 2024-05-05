import styles from "./style.module.css";
import { Line } from "react-chartjs-2";
import { useEffect, useContext } from "react";
import { chartContext } from "../../../context/ChartDataProvider";
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
  const [
    chartData,
    selectedDays,
    setSelectedDays,
    getPosts,
    ids
  ] = useContext(chartContext);
  console.log(chartData)
  useEffect(() => {
    const fetchPosts = async () => {
      for (let i = 0; i < ids.length; i++) {
        await getPosts(ids[i]);
      }
    };

    fetchPosts();
  }, [selectedDays , ...ids]);

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
      {chartData && (
        <div className={styles.marketPrices}>
          {Object.keys(chartData).map((key) => (
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
                  }}
                  name=""
                >
                  <option value="1">1</option>
                  <option value="7">7</option>
                  <option value="30">30</option>
                </select>
              </div>
              {renderCharts(chartData[key]?.labels, chartData[key]?.data)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MarketPriceItem;
