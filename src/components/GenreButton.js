import React from "react";

const GenreButton = ({ title, picture }) => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        color: "white",
        maxWidth: "400px",
        width: "100%",
        margin: "10px",
      }}
    >
      <img src={picture} alt="pic" style={{ width: "100%" }} />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default GenreButton;
