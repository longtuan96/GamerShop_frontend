import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

const UserPayment = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [formData, setFormData] = useState({
    topUp: null,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.topUpCurrentUser(formData));
  };

  const formatCurrency = (number) => {
    if (number)
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  };

  return (
    <>
      <div style={{ padding: "5%" }}>
        <Text fontSize="2xl" fontWeight="bold">
          Payment Settings
        </Text>
        <Box pt={"5%"} w={"60%"}>
          <Text>{`Balance: ${formatCurrency(currentUser.balance)}`}</Text>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Control
                type="text"
                placeholder="Fund"
                name="topUp"
                onChange={handleChange}
              />
              <Button
                variant="solid"
                colorScheme="blue"
                type="submit"
                mt={"4%"}
              >
                Add Funds
              </Button>
            </Form.Group>
          </Form>
        </Box>
      </div>
    </>
  );
};

export default UserPayment;
