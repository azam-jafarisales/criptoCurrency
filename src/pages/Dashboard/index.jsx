import { Outlet } from "react-router-dom";
import DoughnutChart from "../../components/DoughnutChart";

function Dashboard() {
  return (
    <>
      <DoughnutChart />
      <Outlet />
    </>
  );
}

export default Dashboard;
