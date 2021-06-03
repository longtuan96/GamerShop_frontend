import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../redux/actions/auth.actions";
import UserCart from "./UserCart";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Center,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { Col, Row } from "react-bootstrap";

const UserBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState("");

  // let isAuthenticated = false;
  // const accessToken = localStorage.getItem("accessToken");
  // if (accessToken !== "" && accessToken !== null && accessToken !== undefined) {
  //   isAuthenticated = true;
  // }
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleClick = (btn) => {
    if (show === btn) {
      setShow("");
    } else {
      setShow(btn);
    }
  };
  const handleButtonLogin = () => {
    history.push("/login");
  };

  const handleUserButton = (btnName) => {
    switch (btnName) {
      case "user information":
        history.push("/user/profile");

        break;
      case "sign out":
        dispatch(authActions.logoutRequest());
        setShow("");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {isAuthenticated && currentUser ? (
        <>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <Avatar
                  name={currentUser.name}
                  src={currentUser.avatarUrl}
                  size="xs"
                />
              }
              variant=""
            />
            <MenuList>
              <MenuItem
                onClick={() => {
                  history.push("/user/profile");
                }}
              >
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
                    <Text fontSize="md" fontWeight="bold">
                      {currentUser.name}
                    </Text>

                    <Text fontSize="sm">{currentUser.email}</Text>
                  </Col>
                </Row>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/user/profile");
                }}
              >
                Account Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/user/payment_setting");
                }}
              >
                Payment Management
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(authActions.logoutRequest());
                }}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            aria-label="open wishlist"
            variant="ghost"
            icon={<StarIcon size="md" />}
            onClick={() => history.push("/wishlist")}
          />

          <IconButton
            ref={btnRef}
            colorScheme="white"
            variant="ghost"
            onClick={onOpen}
            icon={
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "black" }}
              />
            }
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Text fontSize="4xl" fontWeight="light">
                  Confirm Purchase
                </Text>
              </DrawerHeader>

              <DrawerBody>
                <UserCart />
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Button colorScheme="teal" size="md" onClick={handleButtonLogin} m={4}>
          login
        </Button>
      )}
    </div>
  );
};

export default UserBox;
