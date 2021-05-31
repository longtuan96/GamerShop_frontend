import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
  const history = useHistory();
  let isAuthenticated = false;
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== "" || accessToken !== null || accessToken !== undefined) {
    isAuthenticated = true;
  }
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => history.goBack()} />;
};

export default PrivateRoute;
