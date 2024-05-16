// import { createContext, useState } from "react";
// import { httpClient } from "../services/http";
// export const chartContext = createContext();
// export const ChartDataProvider = ({ children }) => {
//   const ids = [ "tether", "ethereum", "bitcoin"];
//   const [chartData, setChartData] = useState(null);
//   const initialSelectedDays = ids.reduce((acc, id) => {
//     acc[id] = 1;
//     return acc;
//   }, {});
//   const [selectedDays, setSelectedDays] = useState(initialSelectedDays);
//   const [error, setError] = useState(null);
//   function getPosts(id) {
//     httpClient
//       .get(`coins/${id}/market_chart?vs_currency=usd&days=${selectedDays[id]}`)
//       .then((response) => {
//         setChartData((prevState) => ({
//           ...prevState,
//           [id]: {
//             labels: response?.prices.map((item) => item[0]),
//             data: response?.prices.map((item) => item[1]),
//           },
//         }));
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }
//   // function getChart(id , day) {
//   //   httpClient
//   //     .get(`coins/${id}/market_chart?vs_currency=usd&days=${day}`)
//   //     .then((response) => {
//   //       setChartData((prevState) => ({
//   //         ...prevState,
//   //         [id]: {
//   //           labels: response?.prices.map((item) => item[0]),
//   //           data: response?.prices.map((item) => item[1]),
//   //         },
//   //       }));
//   //     })
//   //     .catch((error) => {
//   //       setError(error);
//   //     });
//   // }

//   return (
//     <chartContext.Provider
//       value={[chartData, selectedDays, setSelectedDays, getPosts, ids]}
//     >
//       {children}
//     </chartContext.Provider>
//   );
// };
