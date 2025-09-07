import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Result from "./components/result";
import Chat from "./components/chat"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<Result />} />
        <Route path="/chat" element={<Chat /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
