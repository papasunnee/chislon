import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./WhatWeDo.scss";
export default class WhatWeDo extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="container-fluid whatwedo">
          <Container>
            <Row>
              <Col md={12}>
                <h1>
                  WHY CHOOSE <span>CHISLON BROADWAY</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="num blue">1</div>
                <h5>We offer global mobility services</h5>
                <p>
                  Ut porttitor ut est eu ornare. In metus dui, suscipit at
                  viverra faucibus, accumsan at odio. Duis finibus sollicitudin
                  libero, sed tempor diam euismod sed. Sed interdum odio a
                  finibus gravida.
                </p>
              </Col>
              <Col md={4}>
                <div className="num">2</div>
                <h5>We offer global mobility services</h5>
                <p>
                  Ut porttitor ut est eu ornare. In metus dui, suscipit at
                  viverra faucibus, accumsan at odio. Duis finibus sollicitudin
                  libero, sed tempor diam euismod sed. Sed interdum odio a
                  finibus gravida.
                </p>
              </Col>
              <Col md={4}>
                <div className="num gold">3</div>
                <h5>We offer global mobility services</h5>
                <p>
                  Ut porttitor ut est eu ornare. In metus dui, suscipit at
                  viverra faucibus, accumsan at odio. Duis finibus sollicitudin
                  libero, sed tempor diam euismod sed. Sed interdum odio a
                  finibus gravida.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
