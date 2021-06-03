import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authActions } from "../../redux/actions/auth.actions";
import { routeActions } from "../../redux/actions/route.actions";
import { Image, Box, Text, Button } from "@chakra-ui/react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const LoginPage = () => {
  const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginWithFacebook = (response) => {
    dispatch(authActions.loginWithFb(response.accessToken));
  };

  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogleRequest());
  };

  // let isAuthenticated = false;
  // const accessToken = localStorage.getItem("accessToken");
  // if (accessToken !== "" && accessToken !== null && accessToken !== undefined) {
  //   isAuthenticated = true;
  // }
  const loading = useSelector((state) => state.auth.loading);

  const handleClick = () => {
    history.push("/register");
  };

  const handleGoBack = () => {
    history.goBack();
  };

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
          <FacebookLogin
            appId={FB_APP_ID}
            fields="name,email,picture"
            callback={loginWithFacebook}
            icon="fa-facebook"
            onFailure={(err) => {
              console.log("FB LOGIN ERROR:", err);
            }}
            containerStyle={{
              textAlign: "center",
              backgroundColor: "#3b5998",
              borderColor: "#3b5998",
              flex: 1,
              display: "flex",
              color: "#fff",
              cursor: "pointer",
              marginBottom: "3px",
            }}
            buttonStyle={{
              flex: 1,
              textTransform: "none",
              padding: "12px",
              background: "none",
              border: "none",
            }}
          />

          {/* <GoogleLogin
            className="google-btn d-flex justify-content-center"
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={loginWithGoogle}
            onFailure={(err) => {
              console.log("GOOGLE LOGIN ERROR:", err);
            }}
            cookiePolicy="single_host_origin"
          /> */}
          <Text align="center" fontSize="sm">
            Or sign-in with one of your account
          </Text>
          <Box p="30px">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Sign-in ID (Email Address)"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                colorScheme="blue"
                isFullWidth={true}
                type="submit"
                mt={4}
              >
                Log In
              </Button>
            </Form>

            <Text fontSize="xs">Don't have Account?</Text>

            <Button
              colorScheme="white"
              isFullWidth={true}
              variant="outline"
              mt={6}
              onClick={handleClick}
            >
              Create new Account
            </Button>

            <Button
              colorScheme="red"
              isFullWidth={true}
              variant="ghost"
              mt={6}
              onClick={handleGoBack}
            >
              Back
            </Button>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default LoginPage;
