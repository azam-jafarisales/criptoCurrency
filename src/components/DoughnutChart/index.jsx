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
  const doughnutLabel = {
    Id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      //TEXT
      ctx.save();
      ctx.font = "bold 16px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("test", centerX, centerY);
      ctx.textAlign = "center";
    },
  };
  return (
    <div className={styles.doughnutChart_container}>
      <Doughnut
        data={{
          labels: "",
          datasets: [
            {
              label: "$ ",
              data: [20, 15, 25, 10],
              backgroundColor: ["#674aff", "#02c39a", "#ffaa35", "#3d3e52"],
              circumference: 240,
              rotation: -120,
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
        plugins={[doughnutLabel]}
      />
    </div>
  );
}

export default DoughnutChart;
