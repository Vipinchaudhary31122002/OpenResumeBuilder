import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load components
const HomePage = lazy(() => import("./pages/home/HomePage"));
const AuthPage = lazy(() => import("./pages/auth/AuthPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));
const SignUp = lazy(() => import("./pages/auth/components/SignUp"));
const SignIn = lazy(() => import("./pages/auth/components/SignIn"));
const ForgotPassword = lazy(() =>
  import("./pages/auth/components/ForgotPassword")
);
const Resume = lazy(() => import("./pages/dashboard/components/resume/Resume"));
const Settings = lazy(() =>
  import("./pages/dashboard/components/settings/Settings")
);

// importing stylesheet
import "./App.css";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="auth" element={<AuthPage />}>
          <Route index element={<Navigate to="signin"/>} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
        <Route exact path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="resumes"/>} />
          <Route path="resumes" element={<Resume />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
