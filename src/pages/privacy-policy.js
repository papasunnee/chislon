import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import SectionStyle from "../components/styles/SectionStyle";
import ContentPages from "../components/Footer/ContentPages";

export default function Disclaimer() {
  return (
    <Fragment>
      <Jumbotron title="PRIVACY POLICY" />
      <Container>
        <SectionStyle>
          <Row>
            <Col md={12}>
              <ContentPages />
            </Col>
          </Row>
        </SectionStyle>
      </Container>
    </Fragment>
  );
}
