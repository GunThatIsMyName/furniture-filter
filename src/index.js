import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./context/appContext";
import ProdcutProvider from "./context/productContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ProdcutProvider>
        <App />
      </ProdcutProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
