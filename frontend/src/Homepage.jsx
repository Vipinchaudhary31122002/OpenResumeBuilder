import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

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
      <a href="/admin">
        <button className="btn btn-primary m-2">React Admin</button>
      </a>
      <a href="/client">
        <button className="btn btn-primary m-2">React Client</button>
      </a>
      <button className="btn btn-primary m-2" onClick={fetchData}>
        Data fetch
      </button>

      <Outlet />
    </>
  );
};

export default Homepage;
