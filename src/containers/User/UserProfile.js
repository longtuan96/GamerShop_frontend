import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserProfileEditBox from "../../components/UserProfileEditBox";
import { Box, Text } from "@chakra-ui/react";
const UserProfile = () => {
  const [show, setShow] = useState(false);
  const [editButton, setEditButton] = useState("");
  const handleClose = () => setShow(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleClick = (btn) => {
    setEditButton(btn);

    setShow(true);
  };
  return (
    <div style={{ padding: "5%" }}>
      <Text fontSize="2xl" fontWeight="bold">
        Profile
      </Text>
      <Table size="md" style={{ margin: "5% 0", width: "60%" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{currentUser.name}</td>

            <td>
              <button onClick={() => handleClick("Name")}>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{currentUser.gender}</td>

            <td>
              <button onClick={() => handleClick("Gender")}>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{currentUser.language}</td>

            <td>
              <button onClick={() => handleClick("Language")}>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <img
                src={
                  currentUser.avatarUrl === ""
                    ? "images/blank_avatar.jpg"
                    : currentUser.avatarUrl
                }
                alt="avatar"
              />
            </td>

            <td>
              <button onClick={() => handleClick("Avatar")}>Edit</button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <UserProfileEditBox btn={editButton} />
      </Modal>
    </div>
  );
};

export default UserProfile;
