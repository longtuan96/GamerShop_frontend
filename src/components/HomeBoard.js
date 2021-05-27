import React from "react";
import { Col, Row } from "react-bootstrap";

import { useHistory } from "react-router";

const HomeBoard = ({ name, description, poster, gameId }) => {
  const history = useHistory();
  const handleClick = (gameId) => {
    history.push(`/game/${gameId}`);
  };
  return (
    <>
      <img
        src={poster}
        alt="big pic"
        style={{ width: "100%", height: "auto" }}
      />
      <Row>
        <Col>
          <h1>{name}</h1>
          <p>{description}</p>
        </Col>
        <Col>
          <button onClick={() => handleClick(gameId)}>Detail</button>
        </Col>
      </Row>
    </>
  );
};

export default HomeBoard;
