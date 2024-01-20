import { Outlet, useNavigate } from "react-router-dom";

const Homepage = () => {
  // useNavigate hook used to navigate bw the nested routes
  const navigate = useNavigate();
  // navigate to the specifiec path
  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleLinkClick("/hell")}
        data-bs-dismiss="offcanvas"
      >
        Hell
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleLinkClick("/")}
        data-bs-dismiss="offcanvas"
      >
        Midguard
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleLinkClick("/heaven")}
        data-bs-dismiss="offcanvas"
      >
        Heaven
      </button>
      <br />
      <a href="https://openresumebuilder.vercel.app/admin">
        <button className="btn btn-primary m-2">React Admin</button>
      </a>
      <a href="https://openresumebuilder.vercel.app/client">
        <button className="btn btn-primary m-2">React Client</button>
      </a>
      <Outlet />
    </>
  );
};

export default Homepage;
