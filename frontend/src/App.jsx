import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const SignIn = lazy(() => import("./pages/home/components/SignIn"));
const SignUp = lazy(() => import("./pages/home/components/SignUp"));
const ForgotPassword = lazy(() =>
  import("./pages/home/components/ForgotPassword")
);
const Builder = lazy(() => import("./pages/builder/Builder"));
const AccountSettings = lazy(() =>
  import("./pages/dashboard/components/AccountSettings")
);
const PasswordChangeSettings = lazy(() =>
  import("./pages/dashboard/components/PasswordChangeSettings")
);
const DeleteAccountSettings = lazy(() =>
  import("./pages/dashboard/components/DeleteAccountSettings")
);
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
            <Route path="account" element={<AccountSettings />} />
            <Route path="passwordchange" element={<PasswordChangeSettings />} />
            <Route path="deleteaccount" element={<DeleteAccountSettings />} />
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
