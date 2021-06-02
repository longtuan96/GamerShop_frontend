import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NotAdmin from "../Admin/NotAdmin";

const AdminRoute = ({ ...rest }) => {
  const isAdmin = localStorage.getItem("role") === "admin";
  if (isAdmin) return <Route {...rest} />;
  delete rest.component;
  // return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
  return <Route {...rest} component={NotAdmin} />;
};

export default AdminRoute;
