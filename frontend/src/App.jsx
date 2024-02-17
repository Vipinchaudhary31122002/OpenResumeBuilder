import { Routes, Route } from "react-router-dom";

// importing components
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/home/components/SignIn";
import SignUp from "./pages/home/components/SignUp";
import ForgotPassword from "./pages/home/components/ForgotPassword";
import Builder from "./pages/builder/Builder";
import AccountSettings from "./pages/dashboard/components/AccountSettings";
import PasswordChangeSettings from "./pages/dashboard/components/PasswordChangeSettings";
import DeleteAccountSettings from "./pages/dashboard/components/DeleteAccountSettings";

// importing stylesheet
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        {/* homepage route */}
        <Route exact path="/" element={<HomePage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
        {/* dashboard route */}
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route path="settings">
            <Route path="account" element={<AccountSettings />} />
            <Route path="passwordchange" element={<PasswordChangeSettings />} />
            <Route path="deleteaccount" element={<DeleteAccountSettings />} />
          </Route>
        </Route>
        {/* builder route */}
        <Route exact path="/builder" element={<Builder />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
