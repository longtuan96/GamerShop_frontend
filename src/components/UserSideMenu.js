import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../redux/actions/auth.actions";

const UserSideMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleSignOut = () => {
    dispatch(authActions.logoutRequest());
    history.push("/latest");
  };
  const handleClick = (btn) => {
    switch (btn) {
      case "profile":
        history.push("/user/profile");
        break;
      case "payment":
        history.push("/user/payment_setting");
        break;

      case "library":
        history.push("/user/library");
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ width: "200px" }}>
      <div>
        <Row>
          <Col>
            <img
              src={
                currentUser.avatarUrl === ""
                  ? "images/blank_avatar.jpg"
                  : currentUser.avatarUrl
              }
              alt="avatar"
              style={{ width: "60px" }}
            />
          </Col>
          <Col>
            <p>{currentUser.name}</p>
            <p>{currentUser.email}</p>
            <p>{`Balance: ${currentUser.balance}$`}</p>
          </Col>
        </Row>
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => handleClick("profile")}>Profile</button>
        <button onClick={() => handleClick("profile")}>
          Family Management
        </button>
        <button onClick={() => handleClick("payment")}>Payment Method</button>

        <button onClick={() => handleClick("library")}>Library Games</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default UserSideMenu;
