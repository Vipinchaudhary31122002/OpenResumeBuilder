import Button from "react-bootstrap/Button";

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

const DeleteAccountSettings = () => {
  return (
    <>
      <form className="DeleteForm">
        <Button variant="outline-danger">Delete my account</Button>
      </form>
    </>
  );
};

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

export { PasswordChangeSettings, AccountSettings, DeleteAccountSettings };
