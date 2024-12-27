import React from "react";
import ReactDOM from "react-dom/client"; // Impor dari react-dom/client
import App from "./App";

// Membuat root dengan createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
