import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./Context/UserProvider";
import RefreshProvider from "./Context/RefreshContext.js";
import SearchProvider from "./Context/SearchContext.js";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SearchProvider>
    <RefreshProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </RefreshProvider>
  </SearchProvider>
);
