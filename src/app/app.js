// import external modules
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
// import internal(own) modules
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

const App = (props) => (
  <BrowserRouter basename="/">
    <Router />
  </BrowserRouter>
);

export default App;
