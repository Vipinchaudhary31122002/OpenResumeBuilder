import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className="SideNavbar d-flex justify-content-center
      align-items-center"
        style={{
          width: "200px",
          height: "100%",
          background: "black",
          position: "fixed",
          top: 0,
          left: 0,
        }}
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
