import React, { useState } from "react";
import { Table, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserProfileEditBox from "../../components/UserProfileEditBox";
import { Box, Text, Button, Divider, Image, Avatar } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
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
      <Table size="md" style={{ margin: "5% 0 0 0", width: "60%" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{currentUser.name}</td>

            <td>
              <Button
                leftIcon={<SettingsIcon />}
                onClick={() => handleClick("Name")}
              >
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{currentUser.gender}</td>

            <td>
              <Button
                leftIcon={<SettingsIcon />}
                onClick={() => handleClick("Gender")}
              >
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{currentUser.language}</td>

            <td>
              <Button
                leftIcon={<SettingsIcon />}
                onClick={() => handleClick("Language")}
              >
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <Avatar
                size="xl"
                showBorder={true}
                name={currentUser.name}
                src={currentUser.avatarUrl}
              />
            </td>

            <td>
              <Button
                leftIcon={<SettingsIcon />}
                onClick={() => handleClick("Avatar")}
              >
                Edit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Text fontSize="sm" fontWeight="light">
        {" "}
        Your information will be kept and will not be shared
      </Text>
      <Modal show={show} onHide={handleClose}>
        <UserProfileEditBox btn={editButton} />
      </Modal>
    </div>
  );
};

export default UserProfile;
