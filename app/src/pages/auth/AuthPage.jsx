import { Outlet, useNavigate } from "react-router-dom";

const AuthenicationPage = () => {
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
        onClick={() => handleLinkClick("signup")}
      >
        SignUp Form
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleLinkClick("/auth/signin")}
      >
        SignIn Form
      </button>
      <h1>AuthenticationPage</h1>
      <Outlet />
    </>
  );
};

export default AuthenicationPage;
