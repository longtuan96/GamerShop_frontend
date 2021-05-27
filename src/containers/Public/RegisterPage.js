import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../../redux/actions/auth.actions";
import { routeActions } from "../../redux/actions/route.actions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      avatarUrl: "",
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register data:", formData);
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      console.log("password is not match");
      return;
    } else {
      dispatch(authActions.register(formData));
    }
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);

      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);

  return (
    <div className="Ultility-page">
      <div className="Register-div centered-div">
        <h1>Create your account</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>

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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="password2"
              onChange={handleChange}
            />
          </Form.Group>

          <button className="btn-light" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
