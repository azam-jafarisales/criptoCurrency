import { Line } from "react-chartjs-2";
import styles from "./style.module.css";
// import { PriceContext } from "../../context/PriceProvider";
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
// import { useContext } from "react";


Chartjs.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  [Tooltip]
);

const LineChart = () => {
  // const [price , setPrice]=useContext(PriceContext)
  const Data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
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
        data: [805, 826, 810, 815, 820, 835, 830, 840],
        borderColor: "#0caf60",
        pointStyle: "none",
        pointRadius: 0,
        showLine: true,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };
// const titletooltip=(tooltipItems)=>{
//   return "test"
// }
  const options = {
    dataLabels: false,
    title: null,
    plugins: {
      legend: false,
      tooltip: {
        yAlign:"bottom",
        callbacks: {
          label: function (context) {
            const label = context.dataset.data[context.dataIndex];
            return "$" + label;
          },
          // title: function (context) {
          //   return context.label;
          // },
          // beforeTitle: function (context) {
          //   return context.title;
          // },
          // afterBody: function (context) {
          //   return "\n";
          // },
     
      
        },
      
        enabled: true,
        mode: "index",
        backgroundColor: "transparent",
        intersect: false,
        titleColor: "yellow",
        bodyColor: "red",
        cornerRadius: 15,
        displayColors: true,
        usePointStyle: true,
      },
    },
   

    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "transparent",
        },
      },
      y: {
        min: 800,
        max: 840,
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
    <div className={styles.lineChart}>
    <div className={styles.portflio}>
      <h2>portflio stats</h2>
      <div className={styles.date}>
        <div>all</div>
        <div>1M</div>
        <div>6M</div>
        <div>1Y</div>
        <div>YTD</div>
      </div>
    </div>
    <div className={styles.chart}>
      <Line className={styles.line} data={Data} options={options} />
    </div>
    </div>
  );
};
export default LineChart;