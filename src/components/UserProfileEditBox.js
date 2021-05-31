import React, { useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const UserProfileEditBox = ({ btn }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: null,
    gender: null,
    language: null,
    avatar: null,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.updateCurrentUser(formData));
  };
  return (
    <>
      <Modal.Header>
        <Modal.Title>{btn}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {btn === "Name" ? (
              <>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </>
            ) : btn === "Gender" ? (
              <>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  onChange={handleChange}
                />
              </>
            ) : btn === "Language" ? (
              <>
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="language"
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <Form.Label>Avatar</Form.Label>
                <h1>Work in progress</h1>
              </>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default UserProfileEditBox;
