import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../../redux/actions/auth.actions";
import { routeActions } from "../../redux/actions/route.actions";
import { Image, Box, Text, Button } from "@chakra-ui/react";
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
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        width: "100%",
        background: `url("LoginBg.jpg") no-repeat fixed center`,
      }}
    >
      <div style={{ background: "white", border: "1px solid gray" }}>
        <div
          style={{ background: "rgba(5, 47, 139, 1)" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            src="GamerShop_white.png"
            alt="shop name"
            w="300px"
            p="20px 30px"
          />
        </div>
        <Box p="30px">
          <Text align="center" fontSize="lg">
            Create an Account
          </Text>
          <Box p="30px">
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

              <Button
                isFullWidth
                mt={4}
                colorScheme="blue"
                className="btn-light"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default RegisterPage;
