import React from "react";
import ReactDOM from "react-dom";
import App from ".src/pages/App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from ".src/pages/reset.css.js";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById("root")
);
