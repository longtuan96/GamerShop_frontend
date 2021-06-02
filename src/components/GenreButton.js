import React from "react";
import { Box } from "@chakra-ui/react";
const GenreButton = ({ title, picture }) => {
  return (
    // <div
    //   style={{
    //     position: "relative",
    //     textAlign: "center",
    //     color: "white",
    //     maxWidth: "400px",
    //     width: "100%",
    //     margin: "10px",
    //   }}
    // > </div>

    <Box
      style={{ position: "relative", maxWidth: "400px", width: "100%" }}
      as="button"
      height="auto"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      // px="8px"
      borderRadius="2px"
      fontSize="14px"
      fontWeight="semibold"
      bg="#f5f6f7"
      borderColor="#ccd0d5"
      color="#4b4f56"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      <img src={picture} alt="pic" style={{ width: "100%" }} />
      <div
        style={{
          color: "white",
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
    </Box>
  );
};

export default GenreButton;
