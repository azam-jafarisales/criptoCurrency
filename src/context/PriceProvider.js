import { createContext, useState } from "react";
import { httpClient } from "../services/http";
import { useEffect } from "react";
export const PriceContext = createContext();
export const PriceProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    httpClient
      .get("coins/markets?vs_currency=usd")
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";
 
  return (
    <PriceContext.Provider value={[post, setPost]}>
      {children}
    </PriceContext.Provider>
  );
};
