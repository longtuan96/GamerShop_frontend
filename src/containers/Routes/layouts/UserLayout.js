import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import UserSideMenu from "../../../components/UserSideMenu";
import { userActions } from "../../../redux/actions/user.actions";
import UserLibrary from "../../User/UserLibrary";
import UserPayment from "../../User/UserPayment";
import UserProfile from "../../User/UserProfile";
import PrivateRoute from "../PrivateRoute";
const UserLayout = () => {
  const dispatch = useDispatch();

  const [testLoading, setTestLoading] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(userActions.getCurrentUser());
  }, []);

  useEffect(() => {
    setTestLoading(loading);
  }, [loading]);
  return (
    <>
      {testLoading ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <Row>
            <Col>
              <UserSideMenu />
            </Col>
            <Col>
              <Switch>
                <Route exact path="/user/profile" component={UserProfile} />
                <Route
                  exact
                  path="/user/payment_setting"
                  component={UserPayment}
                />
                <Route exact path="/user/library" component={UserLibrary} />
              </Switch>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default UserLayout;
