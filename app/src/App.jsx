import { Routes, Route, Navigate } from "react-router-dom";

// importing components
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/home/components/SignIn";
import SignUp from "./pages/home/components/SignUp";
import ForgotPassword from "./pages/home/components/ForgotPassword";
import Resume from "./pages/dashboard/components/resume/Resume";
import Settings from "./pages/dashboard/components/settings/Settings";
import Builder from "./pages/builder/Builder";

// importing stylesheet
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route exact path="/" element={<HomePage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="resumes" />} />
          <Route path="resumes" element={<Resume />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route exact path="/builder" element={<Builder />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
