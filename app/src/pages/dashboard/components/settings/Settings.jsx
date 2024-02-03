import Button from "react-bootstrap/Button";

const Settings = () => {
  return (
    <>
      <div id="Settings ">
        <h1>Settings</h1>
        <h2>Account</h2>
        <form id="AccountForm">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your fullname"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </form>
        <hr />
        <h2>Security</h2>
        <form className="SecurityForm">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </form>
        <hr />
        <h2>Danger Zone</h2>
        <form className="DeleteForm">
          <Button variant="danger">Delete my account</Button>
        </form>
      </div>
    </>
  );
};

export default Settings;
