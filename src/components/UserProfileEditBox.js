import React, { useEffect, useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const UserProfileEditBox = ({ btn }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    name: null,
    gender: null,
    language: null,
    avatarUrl: null,
  });
  //Cloudinary upload widget
  let myCropWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "siris",
      uploadPreset: "sirisimages",

      cropping: false,
      sources: ["local"],
      showAdvancedOptions: true,
    },
    (error, result) => {
      if (result.event === "success") {
        let data = { avatarUrl: result.info.secure_url };
        dispatch(userActions.updateCurrentUser(data));

        // setFormData({ ...formData, avatarUrl: result.info.secure_url });
      }
    }
  );

  const open = () => {
    myCropWidget.open();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  placeholder={`Name (current:${currentUser.name})`}
                  name="name"
                  onChange={handleChange}
                />
              </>
            ) : btn === "Gender" ? (
              <>
                {/* <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Gender (current:${currentUser.gender})`}
                  name="gender"
                  onChange={handleChange}
                /> */}
                <Select
                  placeholder="Select option"
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </>
            ) : btn === "Language" ? (
              <>
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Language (current:${currentUser.language})`}
                  name="language"
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <Form.Label>Avatar</Form.Label>
                <h1>
                  <button onClick={open}>test widget</button>
                </h1>
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
