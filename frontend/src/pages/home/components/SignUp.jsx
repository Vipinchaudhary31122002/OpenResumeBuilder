import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            name="username"
            value={inputValue.username}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleOnChange}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            value={inputValue.password}
            onChange={handleOnChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
