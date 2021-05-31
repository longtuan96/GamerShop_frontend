import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";

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

  return (
    <>
      <h1>Payment Settings</h1>
      <div>
        <p>Wallet Balance</p>
        <p>{`$${currentUser.balance}`}</p>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              type="text"
              placeholder="Fund"
              name="topUp"
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              Add Funds
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default UserPayment;
