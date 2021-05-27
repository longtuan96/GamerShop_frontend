import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../Public/LoginPage";
import RegisterPage from "../Public/RegisterPage";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute path="/admin" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  );
};
export default Routes;
