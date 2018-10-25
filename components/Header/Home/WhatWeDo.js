import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
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
                <h1 style={{ marginBottom: "30px" }}>
                  STUDY, GET A JOB AND STRAT A BUSINESS IN
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div className="">
                  <Link href="/country/uk">
                    <a>
                      <img
                        src="/static/country/uk2.jpg"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md={3}>
                <div className="">
                  <Link href="/country/usa">
                    <a>
                      <img
                        src="/static/country/usa2.jpg"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md={3}>
                <div className="">
                  <Link href="/country/canada">
                    <a>
                      <img
                        src="/static/country/canada2.jpg"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md={3}>
                <div className="">
                  <Link href="/country/australia">
                    <a>
                      <img
                        src="/static/country/australia2.jpg"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
