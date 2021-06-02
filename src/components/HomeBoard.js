import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useHistory } from "react-router";

const HomeBoard = ({ name, description, poster, gameId }) => {
  const history = useHistory();
  const handleClick = (gameId) => {
    history.push(`/game/${gameId}`);
  };
  return (
    <div style={{ position: "relative" }}>
      <img
        src={poster}
        alt="big pic"
        style={{ width: "100%", height: "auto" }}
      />

      <Row
        style={{
          position: "absolute",
          width: "100%",
          height: "70px",
          background: "rgba(255,255,255,0.8)",
          bottom: "0px",
          left: "12px",
          padding: "0",
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{name}</h1>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={() => handleClick(gameId)}>Detail</Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBoard;
