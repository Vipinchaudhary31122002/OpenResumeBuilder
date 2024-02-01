import { Link } from "react-router-dom";
import "./navbar.css";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className="SideNavbar d-flex justify-content-center
      align-items-center"
      >
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
        >
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome /> Homepage
          </Link>
          <Link to="resumes" className="btn btn-primary btn-lg">
            Resumes
          </Link>
          <Link to="settings" className="btn btn-primary btn-lg">
            Settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
