import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./routes/Restaurant";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/DevSoc-Development-Task" element={<App />} />
      <Route
        path="/DevSoc-Development-Task/:restaurantName"
        element={<Restaurant />}
      />
    </Routes>
  </BrowserRouter>
);
