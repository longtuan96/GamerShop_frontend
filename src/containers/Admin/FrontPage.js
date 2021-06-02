import React, { useState } from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import Banner from "../../components/Banner";
import { Box, Text, Center } from "@chakra-ui/react";
const FrontPage = () => {
  let myCropWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "siris",
      uploadPreset: "sirisimages",

      cropping: false,
      sources: ["local"],
      showAdvancedOptions: true,
    },
    (error, result) => {
      console.log(error, result);
    }
  );

  const open = () => {
    myCropWidget.open();
  };
  return (
    <>
      <h1>This is FRONT PAGE</h1>
      <button onClick={open}>test widget</button>
    </>
  );
};

export default FrontPage;
