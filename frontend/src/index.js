import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = "908796918214-iem9vt15bbd0lp696uu4bsbiam7udqma.apps.googleusercontent.com"

ReactDOM.render(
  <div>
    <GoogleOAuthProvider clientId={clientId}>
        <React.StrictMode><App /></React.StrictMode>
    </GoogleOAuthProvider>
  </div>,
  document.getElementById("root")
);