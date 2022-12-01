import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// impor halaman
import Home from "./pages/Home";

// impor file css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Global.css";

// import scripts
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
