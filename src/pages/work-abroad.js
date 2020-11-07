import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="WORK ABROAD" />
      <Container>
        <Row>
          <Col md={12}>
            <h5>HOW TO WORK ABROAD</h5>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
