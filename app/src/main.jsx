import React from "react";
import ReactDOM from "react-dom/client";
// bootstrap css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// app component and its css
import App from "./App.jsx";
import "./App.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
