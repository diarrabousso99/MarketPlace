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
import { AuthProvider } from "./Component/Auth";
import { Login } from "./Component/Login";
import { RequireAuth } from "./Component/RequireAuth";
import { Order } from "./Component/Order";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/allproducts" component={AllProducts} />
          <Route path="/login" component={Login} />
          <Route path="/shopping/:id" component={Shopping} />

          <RequireAuth path="/order" component={Order} />

          <Route path="/register" component={Register} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
