import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";
import MyCalendar from "./MyCalendar";

const Immigrations = () => {
  const handleHover = region => {
    console.log("Region", region);
  };
  return (
    <SectionStyle
      className="fluid"
      style={{
        backgroundColor: "#003E52"
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
                <li onMouseOver={() => handleHover(1)}>North America</li>
                <li onMouseOver={() => handleHover(2)}>
                  Central America & Caribbean
                </li>
                <li onMouseOver={() => handleHover(3)}>South America</li>
                <li onMouseOver={() => handleHover(4)}>Europe</li>
                <li onMouseOver={() => handleHover(5)}>Africa</li>
                <li onMouseOver={() => handleHover(6)}>Asia</li>
                <li onMouseOver={() => handleHover(7)}>Oceania</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="worldImage">
              <img className="img-fluid" src="/static/images/home/world.svg" />
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
          .countries li:hover {
            color: #000;
            background-color: #e5e5e5;
            cursor: pointer;
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default Immigrations;
