// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // SignUP Form
// const SignUp = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "/api/v1/auth/signup",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//       username: "",
//     });
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             name="username"
//             value={inputValue.username}
//             onChange={handleOnChange}
//             type="text"
//             className="form-control"
//             placeholder="Enter your username"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             name="email"
//             value={inputValue.email}
//             onChange={handleOnChange}
//             className="form-control"
//             id="exampleInputEmail1"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             name="password"
//             value={inputValue.password}
//             onChange={handleOnChange}
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Enter your password"
//           />
//         </div>
//         <button type="submit" className="btn btn-outline-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// // SignIn Form
// const SignIn = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/v1/auth/login", {
//         ...inputValue,
//       });
//       navigate("/");
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="email"
//             name="email"
//             value={inputValue.email}
//             onChange={handleOnChange}
//             className="form-control"
//             id="exampleInputEmail1"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             name="password"
//             value={inputValue.password}
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-outline-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// // ForgotPassword Form
// const ForgotPassword = () => {
//   return (
//     <>
//       <form>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             placeholder="Enter your email"
//           />
//         </div>
//         <button type="submit" className="btn btn-outline-primary">
//           Send Email
//         </button>
//       </form>
//     </>
//   );
// };

// export { SignUp, SignIn, ForgotPassword };
