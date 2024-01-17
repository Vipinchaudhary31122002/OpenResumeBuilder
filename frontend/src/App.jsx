import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/">
          <Route index element={<Header info="Midguard" />} />
          <Route
            path="hell"
            element={<Header info="The Hell of the universe" />}
          />
          <Route
            path="heaven"
            element={<Header info="The Heaven of the universe" />}
          />
          <Route path="*" element={<Header info="404 page not found" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
