import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Admin from "./components/admin/Admin";
// const clientId = process.env.REACT_APP_GOOGLE_LOGIN_ID
// const clientId = "908796918214-iem9vt15bbd0lp696uu4bsbiam7udqma.apps.googleusercontent.com"

ReactDOM.render(
  <div>
    <Admin />
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}>
//         <React.StrictMode><App /></React.StrictMode>
//     </GoogleOAuthProvider>
//   </div>,
//   document.getElementById("root")
// );

