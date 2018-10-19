import React, { Component } from "react";
import { Row, Col } from "reactstrap";

const AboutRow = props => {
  return (
    <Row style={{ padding: "50px 0px" }}>
      <Col md={6}>
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
      <Col md={6}>
        <img src={`/static/about/${props.image}.png`} />
      </Col>
    </Row>
  );
};

export default AboutRow;