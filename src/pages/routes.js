import * as paths from "../configs/route-paths";
import Dashboard from "./Dashboard";
import TrendingCoins from "./TrendingCoins";
import Currency from "./Currency";
import HomePage from "./HomePage";
import CoinData from "./CoinData";
import Compare from "./Compare";
import GetPriseList from "./GetPricesList";

export const routes = [
  {
    path: "/",
    element: <Currency />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.PRICES,
        element: <GetPriseList />,
      },
      {
        path: paths.COINDATA,
        element: <CoinData />,
      },
      {
        path: paths.TRENDING,
        element: <TrendingCoins />,
      },
      {
        path: paths.DASHBOARD,
        element: <Dashboard />,
      },
      // {
      //   path: paths.COMPARE,
      //   element: <Compare />,
      // },
    ],
  },
];
