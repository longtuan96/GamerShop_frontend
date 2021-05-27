import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Button, FormControl, Row, Col } from "react-bootstrap";
import UserBox from "./UserBox";

const NavBarHeader = () => {
  return (
    <div
      style={{ zIndex: 10, position: "fixed", width: "100%", height: "10%" }}
    >
      <Row
        className=""
        style={{
          background: "white",
          height: "100%",
          width: "100%",
          margin: 0,
        }}
      >
        <Col className="d-flex justify-content-start align-items-center">
          <h4>GamerShop</h4>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <NavLink
            to="/latest"
            activeClassName="NavBar-LinkActive"
            className="NavBar-Link"
          >
            Latest
          </NavLink>

          <NavLink
            to="/collection"
            activeClassName="NavBar-LinkActive"
            className="NavBar-Link"
          >
            Collections
          </NavLink>

          <NavLink
            to="/latest"
            activeClassName="NavBar-LinkActive"
            className="NavBar-Link"
          >
            Deals
          </NavLink>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <UserBox />
          </div>
          <div style={{ width: "50%" }}>
            <Form inline className="d-flex ">
              <FormControl type="text" placeholder="Search" />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NavBarHeader;
