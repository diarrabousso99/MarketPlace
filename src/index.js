import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import App from "./App";
import Register from "./Component/Register";
import reportWebVitals from "./reportWebVitals";
import Shopping from "./Component/Shopping";
import AllProducts from "./Component/AllProducts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/allproducts" component={AllProducts} />
        <Route path="/shopping"  component={Shopping} />

        <Route path="/register" component={Register} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
