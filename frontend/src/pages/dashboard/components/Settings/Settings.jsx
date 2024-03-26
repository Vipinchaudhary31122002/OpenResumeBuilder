import Button from "react-bootstrap/Button";

// Account settings component
const AccountSettings = () => {
  return (
    <>
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
    </>
  );
};

// Delete account component
const DeleteAccountSettings = () => {
  return (
    <>
      <form className="DeleteForm">
        <Button variant="outline-danger">Delete my account</Button>
      </form>
    </>
  );
};

// password Change component
const PasswordChangeSettings = () => {
  return (
    <>
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
    </>
  );
};

// Settings components
const Settings = () => {
  return (
    <>
      <div className="container">
        <h1>Account </h1>
        <AccountSettings />
        <hr />
        <h1>Password</h1>
        <PasswordChangeSettings />
        <hr />
        <h1>Delete account</h1>
        <DeleteAccountSettings />
      </div>
    </>
  );
};

export default Settings;
