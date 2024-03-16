import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="545731931393-3rk79lqagn370picn06a2oq8juq82cv0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
