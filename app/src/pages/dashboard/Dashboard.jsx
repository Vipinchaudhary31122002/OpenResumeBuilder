import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <Link to="/" className="btn btn-primary btn">
        <FaHome /> Homepage
      </Link>
      <Link to="settings" className="btn btn-primary btn">
        Settings
      </Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
