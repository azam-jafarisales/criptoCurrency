import { Link, Outlet } from "react-router-dom";
import styles from "./style.module.css";
import { FaUser } from "react-icons/fa"
function Currency() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}></header>
        <div className={styles.main}>
          <aside className={styles.sideBar}>
            <div>
              <div className={styles.profile}>
                <FaUser className={styles.user} />
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.homeBtn}>Home</button>
              <Link to={"/"}>
                <button>Live Prices</button>
              </Link>
              <Link to={"/trending-coins"}>
                <button>Trending Coins</button>
              </Link>
            </div>
          </aside>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
