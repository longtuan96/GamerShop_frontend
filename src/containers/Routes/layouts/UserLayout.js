import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import UserSideMenu from "../../../components/UserSideMenu";
import { userActions } from "../../../redux/actions/user.actions";
import LoginPage from "../../Public/LoginPage";
import UserLibrary from "../../User/UserLibrary";
import UserPayment from "../../User/UserPayment";
import UserProfile from "../../User/UserProfile";
import PrivateRoute from "../PrivateRoute";
import {
  Box,
  Text,
  Image,
  Avatar,
  Stat,
  StatLabel,
  StatNumber,
  Center,
} from "@chakra-ui/react";
import { Navigation } from "react-minimal-side-navigation";
import logo from "../../../GamerShop_white.svg";
const UserLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [testLoading, setTestLoading] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const currentUser = useSelector((state) => state.user.currentUser);
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
          {/* <Row>
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
                <Route exact path="/login" component={LoginPage} />
                <Route path="/register" component={LoginPage} />
              </Switch>
            </Col>
          </Row> */}
          <AlertMsg />
          <div
            style={{
              height: "auto",
              width: "100%",
              background: "black",
              padding: "0 10%",
            }}
          >
            <img
              src={logo}
              alt="GAMERSHOP"
              style={{ width: "200px", color: "black", padding: "0 20px " }}
            />
          </div>
          <Row style={{ padding: "0 10%" }}>
            <Col lg={3}>
              <div>
                <Row style={{ width: "100%", padding: "10px" }}>
                  <Col lg={4}>
                    <Center h={"100%"}>
                      <Avatar
                        size="md"
                        name={currentUser.name}
                        src={currentUser.avatarUrl}
                      />
                    </Center>
                  </Col>
                  <Col>
                    <Text fontSize="sm" fontWeight="bold">
                      {currentUser.name}
                    </Text>
                    <Text>{`Balance: $${currentUser.balance}`}</Text>
                    <Text fontSize="sm">{currentUser.email}</Text>
                  </Col>
                </Row>
                <Navigation
                  activeItemId={location.pathname}
                  onSelect={({ itemId }) => {
                    history.push(itemId);
                  }}
                  items={[
                    {
                      title: "Profile",
                      itemId: "/user/profile",
                    },
                    {
                      title: "Payment Information",
                      itemId: "/user/payment_setting",
                    },
                    {
                      title: "Library",
                      itemId: "/user/library",
                    },
                    {
                      title: "Order History",
                      itemId: "/user",
                    },
                    {
                      title: "Back to Website",
                      itemId: "/",
                    },
                  ]}
                />
              </div>
            </Col>
            <Col lg={9}>
              <Switch>
                <Route exact path="/user/profile" component={UserProfile} />
                <Route
                  exact
                  path="/user/payment_setting"
                  component={UserPayment}
                />
                <Route exact path="/user/library" component={UserLibrary} />
                <Route exact path="/user" component={""} />
              </Switch>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default UserLayout;
