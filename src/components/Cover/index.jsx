import { motion } from "framer-motion";
// import Button from "../../Common/Button";
import bitcoin from "../../assets/images/glare-isometric-cube-with-cryptocurrencies.png";

import styles from "./styles.module.css";

const Cover = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_left}>
        <motion.h2
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "smooth",
          }}
        >
          Crypto Hawk
        </motion.h2>
        <motion.h3
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "smooth",
          }}
        >
          best Cryptocurrency
          <br />
          exchange with live
          <br />
          market
        </motion.h3>
        <motion.div
          className={styles.landing_buttons}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "smooth",
          }}
        >
        </motion.div>
      </div>
      <div className={styles.landing_right}>
        <motion.img
          src={bitcoin}
          alt="cover"
          initial={{ opacity: 0.5, scale: 0.8, rotate: "30deg" }}
          animate={{
            opacity: 1,
            scale: 0.9,
            rotate: "270deg",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            type: "smooth",
          }}
        />
      </div>
    </div>
  );
};

export default Cover;
