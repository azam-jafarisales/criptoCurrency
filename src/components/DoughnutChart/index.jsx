import { defaults } from "chart.js/auto";
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
  const customPlugin = {
    doughnutLabel: {
      // beforeDatasetsDraw
      // afterDatasetsDraw
      //beforeDraw
      Id: "doughnutLabel",
      afterDatasetsDraw(chart, args, plugins) {
        const { ctx } = chart;
        const centerX = chart.getDatasetMeta(0).data[0].x;
        const centerY = chart.getDatasetMeta(0).data[0].y;

        //text
        ctx.save();
        ctx.font = "bold 16px Poppins";
        ctx.fillStyle = "black";
        ctx.fillText("test", centerX, centerY);
        ctx.textAlign = "center";
      },
    },
    sliceThickness: {
      id: "sliceThickness",
      beforeDraw(chart, plugins) {
        let sliceThicknessp = [500, 500, 500, 500];
        sliceThicknessp.forEach((thickness, index) => {
          chart.getDatasetMeta(0).data[index].outerRadius =
            (chart.chartArea.width / thickness) * 100;
        });
      },
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
        plugins={[customPlugin.doughnutLabel, customPlugin.sliceThickness]}
      />
    </div>
  );
}

export default DoughnutChart;
