import logo from "./logo.svg";
import "./App.css";

import MainWebsite from "./pages/MainWebsite";
import Secret from "./pages/Secret";
import { Routes, Route } from "react-router-dom";

function App() {
  localStorage.setItem("userConnected", "000000");
  return (
    <div className="App main-website">
      <Routes>
        <Route
          path={'/poop'}
          element={<Secret/>}
        />
        <Route
          path={'/*'}
          element={<MainWebsite />}
        />
      </Routes>
    </div>
  );
}

export default App;
