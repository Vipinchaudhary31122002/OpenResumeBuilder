import ReactDOM from "react-dom/client";
// bootstrap css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// app component
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);
