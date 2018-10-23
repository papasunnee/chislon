import React, { Component } from "react";
import Link from "next/link" ;
import { Row, Col } from "reactstrap";

const AboutRow2 = props => {
  return (
    <Row style={{ padding: "50px 0px" }}>
      <Col md={6}>
        <img
          src={`/static/about/${props.image}.png`}
          style={{ width: "100%" }}
        />
      </Col>
      <Col md={6}>
      <Link href="">
      <a>
        <h1
          style={{
            backgroundColor: "#cea600",
            color: "#fff",
            textAlign: "center",
            padding: "8px 0px"
          }}
        >
          {props.title}
        </h1>
        </a>
        </Link>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
          expedita deserunt id in molestiae consectetur quam dolorum veniam
          autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
          expedita deserunt id in molestiae consectetur quam dolorum veniam
          autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos.
          A, adipisci expedita deserunt id in molestiae consectetur quam dolorum
          veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
          quo quos.
        </p>
      </Col>
      <style jsx>
        {`
          img {
            transition: 0.5s;
          }
          img:hover {
            filter: grayscale(50%);
          }
          a{
            text-decoration : none ;
          }
          a:hover{
            text-decoration : none ;
          }
          h1:hover{
            background-color : #b18e02 !important;
          }
        `}
      </style>
    </Row>
  );
};

export default AboutRow2;
