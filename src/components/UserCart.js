import React, { useEffect, useState } from "react";
import { Row, Table, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";
import { Divider, Button, IconButton, Text, Box } from "@chakra-ui/react";
import { DeleteIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Home, Wallet } from "react-iconly";
import GameMedia from "./GameMedia";
import { useHistory } from "react-router";
const UserCart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentOrder = useSelector((state) => state.order.currentOrder);
  const subTotal = useSelector((state) => state.order.subTotal);
  const discount = useSelector((state) => state.order.discount);
  const loading = useSelector((state) => state.order.loading);
  const history = useHistory();
  const handleClick = (btnName, idOrTotal) => {
    switch (btnName) {
      case "remove":
        dispatch(orderActions.removeItemCurrentOrder(idOrTotal));
        break;
      case "payment":
        dispatch(orderActions.paymentOrder(idOrTotal));
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(orderActions.getCurrentOrder());
  }, []);
  useEffect(() => {
    setTotal(subTotal - discount);
  }, [loading]);
  return (
    <>
      {loading ? (
        <h1>Loading!!!!</h1>
      ) : (
        <>
          <div>
            {currentUser === null ||
            currentUser === undefined ||
            currentUser === {} ? (
              <h3>Please log in first</h3>
            ) : (
              <>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "left" }}>Subtotal</td>
                      <td style={{ textAlign: "right" }}>{`$${subTotal}`}</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", color: "blue" }}>
                        Discount
                      </td>
                      <td
                        style={{ textAlign: "right", color: "blue" }}
                      >{`$${discount}`}</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left", fontWeight: "bold" }}>
                        Total{" "}
                      </td>
                      <td
                        style={{ textAlign: "right", fontWeight: "bold" }}
                      >{`$${total}`}</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Text fontSize="xl" fontWeight="bold" m={4}>
                    Payment Method
                  </Text>
                  <Box
                    p="5"
                    borderRadius="md"
                    borderWidth="1px"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    style={{
                      transition: "0.5s ease",
                      boxShadow: "2px 2px 3px black",
                    }}
                    onClick={() => history.push("/user/payment_setting")}
                  >
                    <Row>
                      <Col
                        lg={2}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Wallet set="light" primaryColor="black" size="large" />
                      </Col>
                      <Col lg={8}>
                        {`$${currentUser.balance}`}{" "}
                        <Text color="gray">Your Wallet</Text>
                      </Col>
                      <Col
                        lg={2}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ChevronRightIcon boxSize="50px" />
                      </Col>
                    </Row>
                  </Box>
                </div>
                <div>
                  <Text fontSize="xl" fontWeight="bold" m={4}>
                    Summary
                  </Text>
                  {currentOrder.games &&
                    currentOrder.games.map((item) => (
                      <div key={item._id}>
                        <Divider color="gray" mt={4} mb={4} />
                        <GameMedia game={item} />
                      </div>
                    ))}
                </div>
                <Divider color="gray" mt={4} mb={4} />
                <div className="text-center">
                  <Text size="xs">
                    By selecting [Confirm Purchase] you agree to complete the
                    purchase in accordance with the Terms of Service before
                    using this content
                  </Text>

                  <Button
                    m={2}
                    isLoading={loading}
                    colorScheme="blue"
                    isFullWidth={true}
                    onClick={() => handleClick("payment", total)}
                  >
                    Confirm Purchase
                  </Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UserCart;
