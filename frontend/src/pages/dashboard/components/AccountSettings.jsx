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

export default AccountSettings;
