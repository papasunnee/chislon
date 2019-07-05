import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";
import MyCalendar from "./MyCalendar";

const Events = () => {
  return (
    <SectionStyle className="fluid">
      <Row>
        <Col sm={12} md={6}>
          <Event />
          <Event />
          <Event />
          <Event />
        </Col>
        <Col sm={12} md={6}>
          <MyCalendar />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col md={12}>
            <HeadingStyle style={{ textAlign: "center", margin: "2rem 0" }}>
              POPULAR DESTINATION
            </HeadingStyle>
          </Col>
          <Col md={3}>
            <img
              className="img-fluid"
              src="/static/images/home/australia.png"
            />
          </Col>
          <Col md={3}>
            <img className="img-fluid" src="/static/images/home/canada.png" />
          </Col>
          <Col md={3}>
            <img className="img-fluid" src="/static/images/home/usa.png" />
          </Col>
          <Col md={3}>
            <img className="img-fluid" src="/static/images/home/uk.png" />
          </Col>
        </Row>
      </Container>
    </SectionStyle>
  );
};

export default Events;

const Event = () => {
  return (
    <Row noGutters={true} style={{ marginBottom: "2rem" }}>
      <Col sm={12} md={6}>
        <div className="image">
          <div className="date">
            <div className="day">17</div>
            <div className="month">APR</div>
          </div>
          <img src="/static/images/home/event.jpg" />
        </div>
      </Col>
      <Col sm={12} md={6}>
        <div className="project-details">
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="location">
            <span>
              <i className="fa fa-clock-o" /> 8:00 AM - 11:00 AM
            </span>
            <span>
              <i className="fa fa-map-marker" /> Lagos, Nigeria
            </span>
          </p>
          <p className="message">
            Donec vitae augue nisl. Praesent metus odio, semper nec laoreet
            eget. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia.... Donec vitae
            augue nisl. Praesent metus odio, semper nec laoreet eget.
          </p>
        </div>
      </Col>
      <style jsx>{`
        .image {
          max-width: 270px;
          position: relative;
          margin: auto;
          margin-bottom: 2rem;
        }
        .image img {
          width: 100%;
        }
        .image .date {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #38a1f3;
          color: #d9a900;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }
        .image .day {
          padding: 0.5rem;
          color: #fff;
        }
        .image .month {
          font-size: 1rem;
          padding: 0.5rem;
          background-color: #212121;
        }
        .project-details {
          margin: auto;
        }
        .project-details .title {
          text-transform: uppercase;
          margin-bottom: 0.7rem;
          font-weight: 900;
        }

        .project-details .location span i {
          color: #d9a900;
        }

        .project-details .location span {
          margin-right: 1rem;
          font-weight: 500;
          font-size: 1rem;
        }

        .project-details .message {
          margin-top: 1rem;
        }
      `}</style>
    </Row>
  );
};
