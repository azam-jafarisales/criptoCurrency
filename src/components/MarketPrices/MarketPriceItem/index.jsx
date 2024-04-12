import styles from "./style.module.css";
import { Line } from "react-chartjs-2";
import { useContext  , useState} from "react";
import { chartContext } from "../../../context/ChartDataProvider";
import { PriceContext } from "../../../context/PriceProvider";
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

function MarketPriceItem() {
  const [chartData, day, setDay]= useContext(chartContext);
  const [post, setPost] = useContext(PriceContext);
  // const [selectedDays, setSelectedDays] = useState({});
  
console.log(post)
  const prices = chartData?.prices;
  const labels = [];
  const ids=[]
  const data = [];
  {
    prices?.map((item) => {
      labels.push(item[0]);
      data.push(item[1]);
    });
  }


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
        // min: 800,
        // max: 840,
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

  // const handleSelectChange = (e, index) => {
  //   setSelectedDays({
  //     ...selectedDays,
  //     [index]: e.target.value
  //   });
  // };


  return (
    <div className={styles.marketPrices}>
      {post.map((item , index) => {
      
        return (
          <div className={styles.MarketItem}>
            <div className={styles.titles}>
              <div className={styles.cripto}>
                <div></div>
                <div>
                  <h2>{item.name}</h2>
                </div>
              </div>
              <select
                value={day}
              onChange={(e)=>{
               post.forEach((item)=>{
                if(e.target.id===item.id){
                  setDay(e.target.value)
                }
               })
              }}
                name=""
                id={item.id}
              >
                <option value="1">1</option>
                <option value="7">7</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className={styles.chart}>
              <Line className={styles.line} options={options} data={Data} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MarketPriceItem;






  // const [selectedDays, setSelectedDays] = useState(post.map(() => "1"));
  // const handleChangeDay = (index, value) => {
  //   const updatedDays = [...selectedDays];
  //   updatedDays[index] = value;
  //   setSelectedDays(updatedDays);
  // };
