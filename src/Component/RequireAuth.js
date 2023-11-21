import React from "react";
import { useAuth } from "./Auth";
import { Route, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login";

export const RequireAuth = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  const navigate = useHistory();
  const path = useLocation();
 
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user ? (
          <Component {...props} />
        ) : (
          <Login/>
        )
      }
    />
  );
};
