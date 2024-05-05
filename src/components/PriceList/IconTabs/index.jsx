import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

export default function IconTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontWeight: "bold",
    fontFamily: "var(--font)",
    fontSize: "1rem",
    textTransform: "capitalize",
    padding: "0.5rem",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ad1c21",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab
            icon={<FormatListBulletedIcon />}
            aria-label="list"
            value="list"
            sx={style}
          />
          <Tab
            icon={<GridViewIcon />}
            aria-label="grid"
            value="grid"
            sx={style}
          />
          <Tab
            icon={<BubbleChartIcon />}
            aria-label="bubble"
            value="bubble"
            sx={style}
          />
        </TabList>
        <TabPanel value="list">
          <div>hello</div>
        </TabPanel>
        <TabPanel value="grid">
          <div>grid</div>
        </TabPanel>
        <TabPanel value="bubble">
          <div>bubble</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
