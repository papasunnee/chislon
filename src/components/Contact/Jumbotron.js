import React from "react";
import { Row, Col } from "reactstrap";
import Jumbotron from "../Jumbotron";

const ContactJumbotron = () => {
  return (
    <Jumbotron title="SERVICES">
      <section className="jumboBg">
        <Row>
          <Col md={{ size: 6, offset: 6 }}>
            <div className="jumbotronContent">
              <h5>GET IN TOUCH WITH US</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              <div className="title">Telephone Number</div>
              <p>+234 801 2222 222</p>
              <div className="title">Email Address</div>
              <p>info@chislonbroadway.com</p>
              <div className="title">Office Address</div>
              <p>info@chislonbroadway.com</p>
            </div>
          </Col>
        </Row>
      </section>
      <style jsx>{`
        .jumbotronContent {
          max-width: 500px;
        }
        .jumbotronContent h5 {
          color: #ffda42;
          font-weight: 300;
          text-transform: uppercase;
        }
        .jumbotronContent p {
          color: #fff;
        }
        .title {
          background-color: #ffda42;
          padding: 3px 10px;
          width: 200px;
          color: #fff;
          font-weight: 300;
          color: #000;
          clip-path: polygon(0 0, 82% 0, 100% 100%, 0% 100%);
        }
        .title + p {
          margin-left: 20px;
          font-size: 1.3rem;
        }
      `}</style>
    </Jumbotron>
  );
};

export default ContactJumbotron;
