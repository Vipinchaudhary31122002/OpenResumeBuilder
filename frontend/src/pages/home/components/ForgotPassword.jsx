const ForgotPassword = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Send Email
        </button>
      </form>
    </>
  );
};

export default ForgotPassword;
