import styles from "./style.module.css";
import { FaExchangeAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { PriceContext } from "../../context/PriceProvider";

function QuickExchange() {
  const [post] = useContext(PriceContext);
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    const image = post
      .filter((item) => item.name === selectedOption)
      .map((image) => image.image);
    setImageSrc1(image);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titr}>
        <h2>Quick Exchange</h2>
        <div></div>
      </div>
      <div className={styles.coins}>
        <div className={styles.coinChange}>
          <div className={styles.haveCoin}>
            <h3>I have :</h3>
            <h4>0.00002 btc</h4>
          </div>
          <div>
            <div className={styles.coin}>
              <div className={styles.coinImage}>
                <img src={imageSrc1} alt="" />
              </div>
              <select onChange={handleSelectChange} name="" id="">
                {post.map((item) => {
                  return <option>{item.name}</option>;
                })}
              </select>
              <h4>0.01</h4>
            </div>
          </div>
        </div>
        <div className={styles.changeBtn}>
          <FaExchangeAlt />
        </div>
        <div className={styles.coinChange}>
          <div className={styles.wantCoin}>
            <h3>I want :</h3>
            <h4>0.00002 usdt</h4>
          </div>
          <div className={styles.coin}>
            <div className={styles.coinImage}>
              <img src={imageSrc2} alt="" />
            </div>
            <select onChange={handleSelectChange} name="" id="">
              {post.map((item) => {
                return <option>{item.name}</option>;
              })}
            </select>
            <h4>0.01</h4>
          </div>
        </div>
      </div>
      <button className={styles.exchange}>
        <h2>Exchange</h2>
        {/* <button>go</button> */}
      </button>
    </div>
  );
}
export default QuickExchange;
