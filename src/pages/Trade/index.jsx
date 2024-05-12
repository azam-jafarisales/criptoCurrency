import React from "react";
import { Bubble } from "react-chartjs-2";
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
import { red } from "@mui/material/colors";
  Chartjs.register(  PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Filler,
    Legend,
    Tooltip,)
const getColor = (context) => {
  const value = context.dataset.data[context.dataIndex];
  if (value.count < 5) {
    return "#eaa7ae";
  } else if (value.count < 10) {
    return "#f18d97";
  } else if (value.count < 20) {
    return "#f15b6c";
  } else if (value.count < 30) {
    return "#f0374d";
  } else if (value.count >= 30) {
    return "red";
  }

  return "white";
};

// const annotationPadding = 0.05;

const getRadius = (context) => {
  const value = context.dataset.data[context.dataIndex];
  return value.count + 10;
};

const data = {
  datasets: [
    {
      label: "Demo Dataset",
      data: [
        { x: 2, y: 3, count: 2 },
        { x: 3, y: 4, count: 2 },
        { x: 3, y: 5, count: 8 },
        { x: 4, y: 4, count: 2 },
        { x: 4, y: 5, count: 10 },
        { x: 4, y: 6, count: 10 },
        { x: 5, y: 3, count: 2 },
        { x: 5, y: 4, count: 8 },
        { x: 5, y: 5, count: 8 },
        { x: 5, y: 6, count: 24 },
        { x: 5, y: 7, count: 10 },
        { x: 6, y: 4, count: 8 },
        { x: 6, y: 5, count: 8 },
        { x: 6, y: 6, count: 10 },
        { x: 6, y: 7, count: 24 },
        { x: 6, y: 8, count: 10 },
        { x: 7, y: 7, count: 8 },
        { x: 8, y: 7, count: 8 },
      ],
    },
  ],
};

const options = {
    Legend:false,
  elements: {
   
    point: {
      backgroundColor: "red",
      radius: 60,
    },
  },

};



const Trade = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default Trade;






// import ChartAnnotation from "chartjs-plugin-annotation";

// const plugins = {
//     afterDatasetsDraw: (chartInstance) => {
//       var ctx = chartInstance.chart.ctx;
//       chartInstance.data.datasets.forEach((dataset, i) => {
//         var meta = chartInstance.getDatasetMeta(i);
//         if (!meta.hidden) {
//           meta.data.forEach((element, index) => {
//             ctx.fillStyle = "white";
//             var dataString = dataset.data[index].count.toString() + "人";
//             ctx.font = "bold 11px arial";
//             ctx.textAlign = "center";
//             ctx.textBaseline = "middle";
//             var position = element.tooltipPosition();
//             ctx.fillText(dataString, position.x, position.y);
//           });
//         }
//       });
//     },
//   };


//   annotation: {
//     annotations: [
//       {
//         type: "box",
//         drawTime: "beforeDatasetsDraw",
//         xScaleID: "x-axis-0",
//         yScaleID: "y-axis-0",
//         xMin: 2 + annotationPadding,
//         xMax: 5 - annotationPadding,
//         yMin: 4 + annotationPadding,
//         yMax: 6 - annotationPadding,
//         borderWidth: 2,
//         backgroundColor: "rgba(255, 99, 132, 0.25)",
//       },
//       {
//         type: "line",
//         mode: "vertical",
//         scaleID: "x-axis-0",
//         value: 4.5,
//         xScaleID: "x-axis-0",
//         yScaleID: "y-axis-0",
//         xMin: 2 + annotationPadding,
//         yMin: 4 + annotationPadding,
//         borderColor: "transparent",
//         backgroundColor: "transparent",
//         label: {
//           backgroundColor: "transparent",
//           fontFamily: "sans-serif",
//           fontSize: 12,
//           fontStyle: "bold",
//           fontColor: "red",
//           xPadding: 12,
//           yPadding: 6,
//           cornerRadius: 4,
//           position: "center",
//           yAdjust: -100,
//           enabled: true,
//           content: "Test Label",
//         },
//       },
//     ],
//   },




//   tooltips: {
//     callbacks: {
//       label: function (tooltipItem, data) {
//         const item =
//           data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
//         return `(${tooltipItem.x}, ${tooltipItem.y}): ${item.context}`;
//       },
//     },
//   },
