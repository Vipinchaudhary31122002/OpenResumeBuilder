import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
import SignIn from "./pages/home/components/SignIn";
import SignUp from "./pages/home/components/SignUp";
import ForgotPassword from "./pages/home/components/ForgotPassword";
const Builder = lazy(() => import("./pages/builder/Builder"));
import ErrorPage from "./pages/error/ErrorPage";
import LoadingIndicator from "./utils/LoadingIndicator";

// importing stylesheet
import "./App.css";

function App() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
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
          </Route>
        </Route>
        {/* builder route */}
        <Route exact path="/builder" element={<Builder />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
