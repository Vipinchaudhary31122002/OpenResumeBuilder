import { Link, Outlet } from "react-router-dom";

const AuthenicationPage = () => {
  return (
    <>
      <Link to="signup" className="btn btn-primary m-2">
        SignUp Form
      </Link>
      <Link to="signin" className="btn btn-primary m-2">
        SignIn Form
      </Link>
      <Link to="forgotpassword" className="btn btn-primary m-2">
        Forgot Password Form
      </Link>
      <h1>Welcome to AuthenticationPage</h1>
      <Outlet />
    </>
  );
};

export default AuthenicationPage;
