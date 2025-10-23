import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CompletedTasks from "./components/complete_tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/completed" element={<CompletedTasks />} /> {/* Completed Tasks page */}
      </Routes>
    </Router>
  );
}

export default App;