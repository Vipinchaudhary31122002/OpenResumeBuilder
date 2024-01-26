import { Routes, Route } from "react-router-dom";

// import all the pages
import HomePage from "./pages/home/HomePage";
// import ErrorPage from "./pages/error/ErrorPage";
import AuthPage from "./pages/auth/AuthPage"
import Dashboard from "./pages/dashboard/Dashboard";

// importing stylesheet
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth/signin" element={<AuthPage />}>
          {/* <Route index element={}/>
          <Route path element={}/> */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="*" element={<ErrorPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
