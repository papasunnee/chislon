import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CITIZENSHIP BY RESIDENCE" />
      <Container>
        <Row>
          <Col md={12}>
            <h5>What is Citizenship By Residence</h5>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
