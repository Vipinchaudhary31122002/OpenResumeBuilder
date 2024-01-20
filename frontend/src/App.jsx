import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          <Route index element={<Header info="Midguard" />} />
          <Route
            path="/hell"
            element={<Header info="The Hell of the universe" />}
          />
          <Route
            path="/heaven"
            element={<Header info="The Heaven of the universe" />}
          />
        </Route>
        <Route path="*" element={<Header info="404 page not found" />} />
      </Routes>
      <Analytics/>
    </>
  );
}

export default App;
