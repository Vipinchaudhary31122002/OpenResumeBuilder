const PasswordChangeSettings = () => {
  return (
    <>
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
    </>
  );
};

export default PasswordChangeSettings;
