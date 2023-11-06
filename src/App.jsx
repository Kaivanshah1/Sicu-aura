import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Capture from "./components/Capture";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/capture" element={<Capture />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
