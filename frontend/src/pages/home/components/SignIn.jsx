import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
      const { data } = await axios.post(
        "/api/v1/auth/login",
        {
          ...inputValue,
        }
      );
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            value={inputValue.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignIn;
