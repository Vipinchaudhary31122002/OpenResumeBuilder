// import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="SignIn">
        <h1>SignIn Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* <Link to="/signup" className="btn btn-primary">Sign Up</Link> */}
        </form>
      </div>
    </>
  );
};

export default SignIn;
