import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import FrontPage from "../../Admin/FrontPage";
import PrivateRoute from "../PrivateRoute";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import GamesPage from "../../Admin/GamesPage";
import MembersPage from "../../Admin/MembersPage";
const AdminLayout = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <>
        <Row>
          <AlertMsg />
          <Col lg={3}>
            <div>
              <h1>Welcome Master</h1>
              <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                  history.push(itemId);
                }}
                items={[
                  {
                    title: "Home",
                    itemId: "/admin",
                  },
                  {
                    title: "Games",
                    itemId: "/admin/games",
                  },
                  {
                    title: "Members",
                    itemId: "/admin/members",
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
              <Route exact path="/admin" component={FrontPage} />
              <Route exact path="/admin/games" component={GamesPage} />
              <Route exact path="/admin/members" component={MembersPage} />
            </Switch>
          </Col>
        </Row>
      </>
    </>
  );
};

export default AdminLayout;
