import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";

import List from "../List";
import Grid from "../Grid";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function IconTabs({ post }) {
  const [value, setValue] = useState("list");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--color-secondary)",
    fontFamily: "var(--f-family)",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0caf60",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} className={styles.test}>
          <Tab
            icon={<FormatListBulletedIcon sx={{ fontSize: 20 }} />}
            aria-label="list"
            value="list"
            sx={style}
          />
          <Tab
            icon={<GridViewIcon sx={{ fontSize: 20 }} />}
            aria-label="grid"
            value="grid"
            sx={style}
          />
        </TabList>
        <TabPanel value="list">
          <div className={styles.list_container}>
            <div className={styles.list_titles}>
              <span>#</span>
              <span className={styles.coin_title}>Coin</span>
              <span></span>
              <span>Price</span>
              <span>24h%</span>
              <span>Market Cap</span>
              <span>Total volume</span>
              <span>Circulating Supply</span>
              <span></span>
            </div>
            {post.map((coin, i) => {
              return (
                <Link to={`/coin/${coin.id}`} key={i}>
                  <List coin={coin} />
                </Link>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="grid">
          <div className={styles.grid_container}>
            {post.map((coin, i) => {
              return (
                <Link to={`/coin/${coin.id}`} key={i}>
                  <Grid coin={coin} />
                </Link>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
