import { createContext, useState } from "react";
import { httpClient } from "../services/http";
import { useEffect } from "react";
export const TrendCoinsContext = createContext();
export const TrendCoinsProvider = ({ children }) => {
  const [trendCoins, setTrendCoins] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    httpClient
      .get("search/trending")
      .then((response) => {
        setTrendCoins(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!trendCoins) return "No post!";
 
  return (
    <TrendCoinsContext.Provider value={[trendCoins,setTrendCoins]}>
      {children}
    </TrendCoinsContext.Provider>
  );
};
