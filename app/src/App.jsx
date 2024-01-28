import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const HomePage = lazy(() => import("./pages/home/HomePage"));
const AuthPage = lazy(() => import("./pages/auth/AuthPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));
const SignUp = lazy(() => import("./pages/auth/components/SignUp"));
const SignIn = lazy(() => import("./pages/auth/components/SignIn"));

// importing stylesheet
import "./App.css";

function App() {
  const isAuthenticated = true; // Implement your authentication logic

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route index path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {isAuthenticated ? (
          <>
            <Route path="dashboard" element={<Dashboard />} />
            {/* Other authenticated routes */}
          </>
        ) : null}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
