import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import flags from "../../General/Flags";
import Link from "next/link";
import "./WhatWeDo.scss";
import "../../General/RightSection.scss";
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
                  WITH <span>CHISLON BROADWAY</span>, YOU CAN
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="rightSection">
                  <div className="content">
                    <p>Get a Job in</p>
                    <div className="imageHolder">
                      {flags.map(({ image, href }) => (
                        <Link href={href}>
                          <a>
                            <img
                              src={`/static/country/${image}`}
                              alt=""
                              srcset=""
                            />
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="rightSection">
                  <div className="content">
                    <p>Study In</p>
                    <div className="imageHolder">
                      {flags.map(({ image, href }) => (
                        <Link href={href}>
                          <a>
                            <img
                              src={`/static/country/${image}`}
                              alt=""
                              srcset=""
                            />
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="rightSection">
                  <div className="content">
                    <p>Start a business in</p>
                    <div className="imageHolder">
                      {flags.map(({ image, href }) => (
                        <Link href={href}>
                          <a>
                            <img
                              src={`/static/country/${image}`}
                              alt=""
                              srcset=""
                            />
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
