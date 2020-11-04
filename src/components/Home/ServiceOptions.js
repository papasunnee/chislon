import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";
import "./ServiceOptions.scss";

const ServiceOptions = () => {
  return (
    <SectionStyle className="fluid" style={{ backgroundColor: "#F2F2F2" }}>
      <Container fluid>
        <Row>
          <Col md={12}>
            <HeadingStyle style={{ margin: "2rem 0" }}>
              LATEST IMMIGRATION NEWS
            </HeadingStyle>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>RESIDENCY BY INVESTMENT</p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>CITIZENSHIP BY INVESTMENT</p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>HIGH NETWORTH INVESTORS</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>CERTIFIED PARTNERS</p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>GLOBAL CITIZENSHIP NETWORK</p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="" className="top_text">
                <p>TEMPORARY VISAS</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .flags {
            width: auto !important;
          }
          img + span {
            color: #cea600;
            font-weight: 600;
            margin-left: 10px;
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default ServiceOptions;
