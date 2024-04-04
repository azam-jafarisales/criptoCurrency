import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import styles from "./styles.module.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.font.family = "Poppins";
defaults.plugins.title.color = "black";

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
        options={{
          plugins: {
            title: {
              text: "balance",
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
