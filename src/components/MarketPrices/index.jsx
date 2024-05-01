import MarketPriceItem from "./MarketPriceItem";
import styles from "./style.module.css";
import { useContext, useState, useEffect } from "react";
import { httpClient } from "../../services/http";
// import { PriceContext } from "../../context/PriceProvider";
// import { ChartDataProvider } from "../../context/ChartDataProvider";
function MarketPricees() {
  const [post , setPost]=useState(null)
  const [error , setError]=useState(null)
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
  // console.log(post)
 
  return (
    <div className={styles.marketPrices}>
      {/* {post?.map((item , index , array) => { */}
      {/* // return( */}
        
        <MarketPriceItem  />
      {/* // ) */}
       
   
      {/* // })} */}
    </div>
  );
}

export default MarketPricees;
