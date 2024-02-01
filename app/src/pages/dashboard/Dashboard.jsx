import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Dashboard;
