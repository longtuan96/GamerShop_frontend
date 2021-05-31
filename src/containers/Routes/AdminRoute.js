import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ ...rest }) => {
  const isAdmin = localStorage.getItem("role") === "admin";
  if (isAdmin) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
};

export default AdminRoute;
