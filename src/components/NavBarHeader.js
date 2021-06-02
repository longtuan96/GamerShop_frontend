import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import UserBox from "./UserBox";
import { useDispatch } from "react-redux";
import { gameActions } from "../redux/actions/game.actions";
import {
  FormControl,
  Form,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const NavBarHeader = () => {
  const [status, setStatus] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = () => {
    console.log(formData);
    dispatch(gameActions.searchGame(formData.name));
    history.push("/search");
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setStatus("header--scroll");
      } else {
        setStatus("");
      }
    };
  }, [status]);
  return (
    <div
      style={{ zIndex: 100, position: "fixed", width: "100%", height: "10%" }}
    >
      <Row
        style={
          status === "header--scroll"
            ? {
                transition: "0.5s ease",
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                margin: 0,
              }
            : {
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                margin: 0,
              }
        }
      >
        <Col className="d-flex justify-content-start align-items-center">
          <Image src="GamerShop_black.svg" alt="shop name" w="200px" h="auto" />
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
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <IconButton
                      aria-label="Search database"
                      variant="unstyled"
                      icon={<SearchIcon color="gray.300" />}
                      onClick={handleSubmit}
                    />
                  }
                />
                <Input
                  type="text"
                  placeholder="Search"
                  name="name"
                  onChange={handleChange}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </InputGroup>
            </FormControl>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NavBarHeader;
