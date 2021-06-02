import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";

const MembersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  //useState
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    avatarUrl: null,
  });

  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [id, setId] = useState("");
  //useSelector
  const allGames = useSelector((state) => state.game.allGames);

  //Functions
  const clearFormData = () => {
    setFormData({
      name: null,
      email: null,
      gender: null,
      avatarUrl: null,
    });
  };

  //handle functions
  const handleClose = () => {
    setShow(false);
    dispatch(userActions.getAllUsers());
  };
  const handleShow = (btnName, itemId) => {
    clearFormData();
    setId(itemId);
    setModalTitle(btnName);
    setShow(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.updateUser(id, formData));

    dispatch(userActions.getAllUsers());
    setShow(false);
  };
  const handleDelete = (id) => {
    dispatch(userActions.deleteUser(id));
  };

  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, []);

  const formatCurrency = (number) => {
    if (number)
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  };
  return (
    <>
      <h1>This is Member page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Balance</th>
            <th>Delete?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, itemIndex) => (
              <tr key={item._id}>
                <td>{itemIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.balance && formatCurrency(item.balance)}</td>
                <td>{item.isDeleted ? "Yes" : "No"}</td>
                <td className="">
                  <Button
                    style={{ margin: "2px" }}
                    onClick={() => handleShow("Modify User", item._id)}
                  >
                    Modify
                  </Button>
                  <Button
                    style={{ margin: "2px" }}
                    onClick={() => handleShow("Delete User", item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        {modalTitle === "Modify User" ? (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter gender"
                  name="gender"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>avatarUrl</Form.Label>
                {/* <Form.Control
                  type="file"
                  name="avatarUrl"
                  onChange={handleChange}
                /> */}
                Work in progress
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <>
            <Modal.Body>
              <p>ARE YOU SURE YOU WANT TO DELETE THIS USER?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handleDelete(id)}>
                Yes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default MembersPage;
