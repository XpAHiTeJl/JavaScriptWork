import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Home from "./Home";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
    {/* <Home /> */}
    <App />
  </React.StrictMode>
);
