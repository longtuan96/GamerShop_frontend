import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, Button, FormControl, Row, Col } from "react-bootstrap";
import UserBox from "./UserBox";
import { useDispatch } from "react-redux";
import { gameActions } from "../redux/actions/game.actions";

const NavBarHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: null,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(gameActions.searchGame(formData));
    history.push("/search");
  };

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
            to="/deals"
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
            <Form inline className="d-flex " onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                name="name"
                onChange={handleChange}
              />
              <Button variant="outline-dark" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NavBarHeader;
