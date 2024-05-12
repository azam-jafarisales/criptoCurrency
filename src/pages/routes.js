import * as paths from "../configs/route-paths";
import Dashboard from "./Dashboard";
import Prices from "./Prices";
import TrendingCoins from "./TrendingCoins";
import Currency from "./Currency";

export const routes = [
  {
    path: "/",
    element: <Currency />,
    children: [
      {
        index: true,
        element: <Prices />,
      },
      {
        path: paths.TRENDING,
        element: <TrendingCoins />,
      },
      {
        path: paths.DASHBOARD,
        element: <Dashboard />,
      },
    
    ],
  },
];


