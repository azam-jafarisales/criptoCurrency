import * as paths from "../configs/route-paths";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import News from "./News";
import Exchange from "./Exchange";
import NFT from "./NftMarket";
import Trade from "./Trade";
import Setting from "./Setting";
import Wallet from "./Wallet";
import Transication from "./Transication";
import Prices from "./Prices";

export const routes = [
  {
    path: paths.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: paths.EXCHANGE,
    element: <Exchange />,
  },
  {
    path: paths.NEWS,
    element: <News />,
  },
  {
    path: paths.NEWS,
    element: <News />,
  },
  {
    path: paths.SETTING,
    element: <Setting />,
  },
  {
    path: paths.NFT,
    element: <NFT />,
  },
  {
    path: paths.TRADE,
    element: <Trade />,
  },
  {
    path: paths.WALLET,
    element: <Wallet />,
  },
  {
    path: paths.TRANSICATION,
    element: <Transication />,
  },

  {
    path: paths.NOT_FOUNDED,
    element: <NotFound />,
  },
  {
    path: paths.PRICES,
    element: <Prices />,
  },
];
