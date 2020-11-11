import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="INTERNATIONAL PARTNERS" />
      <Container>
        <Row>
          <Col md={12}>
            <h5>INTERNATIONAL PARTNERS</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              aut laborum. Architecto, incidunt molestiae vero, tempora iusto
              qui adipisci culpa, delectus sed est voluptates fuga eius nisi
              ducimus cum maxime!
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
