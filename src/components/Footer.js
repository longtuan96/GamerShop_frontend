import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ background: "rgba(5, 47, 139, 1)", color: "white" }}>
      <div>
        <Row>
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
        <div>@ 2021 SIRIS Entertainment </div>
      </div>
    </div>
  );
};

export default Footer;
