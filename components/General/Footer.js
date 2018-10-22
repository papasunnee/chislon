import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import "./Footer.scss";
import Immigration from "./Immigration";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Immigration />
        <div className="footer">
          <Container>
            <div className="content">
              <div>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-work">
                      <a>How We Work</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
                      <a>Partners</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/latest-news">
                      <a>Latest News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5>THIS IS THE TITLE FOR THE TEXT</h5>
                <p style={{ width: "300px" }}>
                  Ut porttitor ut est eu ornare. In metus dui, suscipit at
                  viverra faucibus, accumsan at odio. Duis finibus sollicitudin
                  libero, sed tempor diam euismod sed. Sed interdum odio a
                  finibus gravida. Aliquam tincidunt
                </p>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundColor: "#000"
            }}
          >
            <Container>
              <Row>
                <Col md={12}>
                  <div className="footer2">
                    <div>
                      Copyright 2018
                      <span style={{ color: "gold" }}>
                        Chislon Broadway Worldwide Visa Services.
                      </span>
                      All Rights Reserved
                      <span>|</span>
                      Privacy
                      <span>|</span>
                      Disclaimer
                    </div>

                    <div>
                      <img src="/static/whitelogo.png" alt="" width="150px" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}
