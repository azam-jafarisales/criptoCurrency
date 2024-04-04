import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import styles from "./styles.module.css";

function DoughnutChart() {
  return (
    <div className={styles.doughnutChart_container}>
      <Doughnut
        data={{
          labels: "",
          datasets: [
            {
              label: "test",
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
