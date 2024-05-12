import { useContext } from "react";
import styles from "./styles.module.css"
import { PriceContext } from "../../context/PriceProvider";
function Trends() {
  const [post, setPost] = useContext(PriceContext);
  console.log(post)
  const sortedPost = post.sort((a, b) => {
    return a.market_cap_rank - b.market_cap_rank;
  });
  const trendPosts =sortedPost.slice(0,10)
  return (<div className={styles.container}>
    {trendPosts.map((item)=>{
       return (
        <div className={styles.containerItem}>
        <img src={item.image} />
        <span>{item.name}</span>
        <span>{item.current_price}</span>
    </div>
       )
    })}
    </div>)
}

export default Trends;
