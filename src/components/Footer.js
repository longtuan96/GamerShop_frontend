import React from "react";
import { Col, Row } from "react-bootstrap";
import { Image, Box, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div
      style={{
        background: "rgba(5, 47, 139, 1)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ height: "auto", width: "100%" }} className="Contain">
        <Image src="GamerShop_white.svg" alt="shop name" w="200px" h="auto" />

        <Row style={{ padding: "50px 0 50px 0" }}>
          <Col>
            <div>
              <p>Support</p>
              <p>Privacy Policy</p>
              <p>Website Term of Use</p>
              <p>Sitemap</p>
              <p>Legal</p>
            </div>
          </Col>
          <Col>
            <p>Health Warnings</p>
            <p>About Ratings</p>
          </Col>
          <Col>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>YouTube</p>
            <p>Instagram</p>
          </Col>
        </Row>
        <p className="text-center">@ 2021 SIRIS Entertainment </p>
      </div>
    </div>
  );
};

export default Footer;
