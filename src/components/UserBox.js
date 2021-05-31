import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../redux/actions/auth.actions";
import UserCart from "./UserCart";
const UserBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState("");

  let isAuthenticated = false;
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== "" && accessToken !== null && accessToken !== undefined) {
    isAuthenticated = true;
  }

  const handleClick = (btn) => {
    if (show === btn) {
      setShow("");
    } else {
      setShow(btn);
    }
  };
  const handleButtonLogin = () => {
    history.push("/login");
  };

  const handleUserButton = (btnName) => {
    switch (btnName) {
      case "user information":
        history.push("/user/profile");

        break;
      case "sign out":
        dispatch(authActions.logoutRequest());
        setShow("");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="NavBar-dropdown">
            <button onClick={() => handleClick("user")} className="NavBar-btn">
              <img
                src="images/blank_avatar.jpg"
                alt="avatar"
                style={{ width: "20px" }}
              />
            </button>
            <div
              className={
                show === "user"
                  ? "NavBar-dropdown-content NavBar-dropdown-show"
                  : "NavBar-dropdown-content"
              }
            >
              <button onClick={() => handleUserButton("user information")}>
                User Information
              </button>
              <button onClick={() => handleUserButton("sign out")}>
                Sign Out
              </button>
            </div>
          </div>

          <div className="NavBar-dropdown">
            <button onClick={() => handleClick("cart")} className="NavBar-btn">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "black" }}
              />
            </button>
            <div
              className={
                show === "cart"
                  ? "NavBar-dropdown-content NavBar-dropdown-show"
                  : "NavBar-dropdown-content"
              }
            >
              <div style={{ overflow: "scroll" }}>
                <UserCart />
              </div>
            </div>
          </div>
        </>
      ) : (
        <button onClick={handleButtonLogin}>login</button>
      )}
    </div>
  );
};

export default UserBox;
