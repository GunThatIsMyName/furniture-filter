import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./context/appContext";
import ProdcutProvider from "./context/productContext";
import FilterProvider from "./context/filterContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ProdcutProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
      </ProdcutProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
