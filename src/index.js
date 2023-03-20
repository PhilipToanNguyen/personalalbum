import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Routes>
      <Route path="/" element={<Home />} />


      </Routes>
      </div>
    </BrowserRouter>
    </React.StrictMode>
);

