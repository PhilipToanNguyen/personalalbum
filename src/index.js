import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
      <div className="flex flex-col min-h-screen">
      <Routes>
      <Route path="/" element={<Home />} />


      </Routes>
      </div>
    </HashRouter>
    </React.StrictMode>
);

