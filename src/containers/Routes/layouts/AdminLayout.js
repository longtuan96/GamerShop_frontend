import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "../../../components/AlertMsg";
import PrivateRoute from "../PrivateRoute";
const AdminLayout = () => {
  return (
    <>
      <>
        <Row>
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              {/* <Route exact path="/admin/profile" component={ProfilePage} />
              <Route exact path="/admin/blogs" component={BlogListPage} />
              <Route exact path="/admin/blogs/:id" component={BlogDetailPage} />
              <Route exact path="/admin/blog/add" component={AddEditBlogPage} />
              <Route
                exact
                path="/admin/blog/edit/:id"
                component={AddEditBlogPage}
              />
              <Route exact path="/admin/friends" component={FriendListPage} />
              <Route exact path="/admin/messenger" component={MessengerPage} />
              <Route component={NotFoundPage} /> */}
            </Switch>
          </Col>
        </Row>
      </>
    </>
  );
};

export default AdminLayout;
