import { createContext, useState } from "react";
import { httpClient } from "../services/http";
import { useEffect } from "react";
export const chartContext = createContext();
export const ChartDataProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [day, setDay] = useState("1");
  const [error, setError] = useState(null);
  // const [id , setId]=useState([])
  useEffect(() => {
    httpClient
      .get(`coins/bitcoin/market_chart?vs_currency=usd&days=${day}`)
      .then((response) => {
        setChartData(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, [day]);
  if (error) return `Error: ${error.message}`;

  return (
    <chartContext.Provider value={[chartData, day, setDay]}>
      {children}
    </chartContext.Provider>
  );
};