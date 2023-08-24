import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Admin from "./components/admin/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const clientId = process.env.REACT_APP_GOOGLE_LOGIN_ID
// const clientId = "908796918214-iem9vt15bbd0lp696uu4bsbiam7udqma.apps.googleusercontent.com"

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route element={<Admin />} path="/admin/*"></Route>
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
