import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";
import MyCalendar from "./MyCalendar";

const Immigrations = () => {
  return (
    <SectionStyle
      className="fluid"
      style={{
        backgroundColor: "#003E52",
        backgroundImage: "url(/static/images/home/world.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right"
      }}
    >
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="destination">
              <h5>DESTINATION WE COVER</h5>
              <form action="">
                <div className="form-group">
                  <input
                    placeholder="Search"
                    className="form-control"
                    type="text"
                  />
                </div>
              </form>
              <ul className="countries">
                <li>North America</li>
                <li>Central America & Caribbean</li>
                <li>South America</li>
                <li>Europe</li>
                <li>Africa</li>
                <li>Asia</li>
                <li>Oceania</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .form-group {
            background-color: #c4c4c4;
            padding: 10px;
          }
          .form-group .form-control {
            border-radius: 0;
            border: 0;
            box-shadow: none;
          }
          .destination {
            max-width: 350px;
            margin: auto;
          }
          .destination h5 {
            color: #cea600;
            font-weight: 600;
            margin-left: 10px;
            text-align: center;
          }
          .countries {
            list-style: none;
            padding: 0;
          }
          .countries li {
            color: #fff;
            background-color: #797979;
            margin-bottom: 2px;
            padding: 5px 10px;
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default Immigrations;
