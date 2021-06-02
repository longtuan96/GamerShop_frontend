import React from "react";
import { Divider, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";
import { Row, Col } from "react-bootstrap";
const GameMedia = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(orderActions.removeItemCurrentOrder(id));
  };
  return (
    <>
      <Row>
        <Col>
          <img
            src={game.picture}
            alt="game pic"
            style={{ width: "80px", height: "80px" }}
          />
        </Col>
        <Col lg={6}>
          <p style={{ fontWeight: "bold" }}>{game.name}</p>
          <div style={{ display: "flex" }}>
            <div
              style={{
                color: "white",
                padding: "1px",
                background: "black",
                width: "max-content",
                fontWeight: "bold",
                margin: "2px",
              }}
            >
              {`-${game.discount}%`}
            </div>
            <p style={{ margin: "2px" }}>{`$${
              game.price - (game.price * game.discount) / 100
            }`}</p>
            <p
              style={{
                textDecoration: "line-through",
                marginLeft: "2px",
                color: "grey",
                margin: "2px",
              }}
            >{`$${game.price}`}</p>
          </div>
        </Col>
        <Col>
          <Button
            leftIcon={<DeleteIcon />}
            onClick={() => handleClick("remove", game._id)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GameMedia;
