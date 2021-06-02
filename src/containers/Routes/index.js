import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../Public/LoginPage";
import RegisterPage from "../Public/RegisterPage";
import AdminRoute from "./AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/user" component={UserLayout} />
      <AdminRoute path="/admin" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
