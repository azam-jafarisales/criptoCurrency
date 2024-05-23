import { createContext, useState } from "react";
import { httpClient } from "../services/http";
import { useEffect } from "react";
export const PriceContext = createContext();
export const PriceProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    httpClient
      .get("coins/markets?vs_currency=usd")
      .then((response) => {
        setPost(response);
        setPaginatedCoins(response?.slice(0, 10));

        console.log(post);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  return (
    <PriceContext.Provider
      value={[post, setPost, paginatedCoins, setPaginatedCoins]}
    >
      {children}
    </PriceContext.Provider>
  );
};
