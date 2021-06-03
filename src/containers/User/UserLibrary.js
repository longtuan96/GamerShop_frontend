import React from "react";
import { useSelector } from "react-redux";
import { Box, Image, AspectRatio, Text, Button } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import { DeleteIcon } from "@chakra-ui/icons";
const UserLibrary = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      <div style={{ padding: "5%" }}>
        <Text fontSize="2xl" fontWeight="bold">
          Library
        </Text>
        <Box pt={"5%"} w={"60%"}>
          <Text fontSize="xl" pb={"5%"}>
            Game Bought
          </Text>
          {currentUser &&
            currentUser.ownedGames.map((item) => (
              <Row
                style={{
                  margin: "5% 0",
                  padding: "10px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  boxShadow: "5px 5px #000",
                }}
              >
                <Col
                  lg={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.poster}
                    alt="game pic"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col lg={""} style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                    {item.name}
                  </p>
                </Col>
              </Row>
            ))}
        </Box>
      </div>
    </>
  );
};

export default UserLibrary;
