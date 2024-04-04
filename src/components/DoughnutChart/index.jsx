import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import styles from "./styles.module.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function DoughnutChart() {
  return (
    <div className={styles.doughnutChart_container}>
      <Doughnut
        data={{
          labels: "",
          datasets: [
            {
              label: "$ ",
              data: [20, 15, 30, 25, 10],
              backgroundColor: [
                "#ffaa35",
                "#3d3e52",
                "transparent",
                "#674aff",
                "#02c39a",
              ],
            },
          ],
        }}
      />
    </div>
  );
}

export default DoughnutChart;
