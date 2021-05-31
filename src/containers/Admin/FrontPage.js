import React, { useState } from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

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
      {/* <WidgetLoader />
      <Widget
        sources={["local"]} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        // sourceKeys={{
        //   dropboxAppKey: "1dsf42dl1i2",
        //   instagramClientId: "d7aadf962m",
        // }} // add source keys
        // and ID's as an object. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={"image"} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={"siris"} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        uploadPreset={"sirisimages"} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={"Open"} // default 'Upload Files'
        style={{
          color: "white",
          border: "none",
          width: "120px",
          backgroundColor: "green",
          borderRadius: "4px",
          height: "25px",
        }} // inline styling only or style id='cloudinary_upload_button'
        folder={"test"} // set cloudinary folder name to send file
        cropping={false} // set ability to crop images -> default = true
        onSuccess={(result) => console.log(result)} // add success callback -> returns result
        onFailure={(response) => console.log("FAIL!!!!!")} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages,
        // set to false for production -> default = true
        // customPublicId={"sample"} // set a specific custom public_id.
        // To use the file name as the public_id use 'use_filename={true}' parameter
        eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"} // add eager transformations -> deafult = null
        use_filename={true} // tell Cloudinary to use the original name of the uploaded
        // file as its public ID -> default = true,
      /> */}
    </>
  );
};

export default FrontPage;
