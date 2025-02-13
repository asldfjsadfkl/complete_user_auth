import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./Context/UserProvider";
import RefreshProvider from "./Context/RefreshContext.js";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RefreshProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </RefreshProvider>
);
