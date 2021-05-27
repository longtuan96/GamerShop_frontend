import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authActions } from "../../redux/actions/auth.actions";
import { routeActions } from "../../redux/actions/route.actions";
const LoginPage = () => {
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    dispatch(authActions.loginRequest(email, password));
  };
  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);

      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);
  if (isAuthenticated) return <Redirect to="/latest" />;
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div>
        <img src="" alt="logo" />
        <p>please sign-in with one of your account</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <button className="btn-light" type="submit">
            Log In
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
