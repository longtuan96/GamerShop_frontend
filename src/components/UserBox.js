import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const UserBox = () => {
  const [show, setShow] = useState("");
  const handleClick = (btn) => {
    if (show === btn) {
      setShow("");
    } else {
      setShow(btn);
    }
  };

  return (
    <div>
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
          <h1>lol</h1>
        </div>
      </div>
      <div className="NavBar-dropdown">
        <button onClick={() => handleClick("favorite")} className="NavBar-btn">
          <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} />
        </button>
        <div
          className={
            show === "favorite"
              ? "NavBar-dropdown-content NavBar-dropdown-show"
              : "NavBar-dropdown-content"
          }
        >
          <h1>favorite</h1>
        </div>
      </div>
      <div className="NavBar-dropdown">
        <button onClick={() => handleClick("cart")} className="NavBar-btn">
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" }} />
        </button>
        <div
          className={
            show === "cart"
              ? "NavBar-dropdown-content NavBar-dropdown-show"
              : "NavBar-dropdown-content"
          }
        >
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
