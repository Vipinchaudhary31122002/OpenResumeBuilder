const PersonalForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default PersonalForm;
