import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import "./Immigration.scss";

export default class Immigration extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="immigration">
          <Container>
            <Row>
              <Col md={12} style={{ textAlign: "center" }}>
                <h2>IMMIGRATION OPPORTUNITIES</h2>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Link href="/country/uk">
                  <a>
                    <img src="/static/country/uk.png" alt="" />
                    <h5>United Kingdom</h5>
                  </a>
                </Link>
                <p>
                  UK Immigration is possible for highly skilled immigrants with
                  an employer with a Tier 2 sponsorship licence under the tier 2
                  visa scheme.
                </p>
              </Col>
              <Col md={3}>
                <Link href="/country/usa">
                  <a>
                    <img src="/static/country/usa.jpg" alt="" />
                    <h5>USA</h5>
                  </a>
                </Link>
                <p>
                  The US non-immigrant and immigrant visa system allows entry of
                  skilled workers including under L1, E2, H1B visa schemes.
                </p>
              </Col>
              <Col md={3}>
                <Link href="/country/australia">
                  <a>
                    <img src="/static/country/australia.png" alt="" />
                    <h5>Australia</h5>
                  </a>
                </Link>
                <p>
                  The Australian immigration system includes a number of popular
                  immigration programs under the SkillSelect system.
                </p>
              </Col>
              <Col md={3}>
                <Link href="/country/canada">
                  <a>
                    <img src="/static/country/canada.png" alt="" />
                    <h5>Canada</h5>
                  </a>
                </Link>
                <p>
                  Canada has skilled immigration visa schemes that allows entry
                  of hundreds of thousands of skilled immigrants each year under
                  Express Entry.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
