import React from "react";
import { Container, Row, Col } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import SectionStyle from "../components/styles/SectionStyle";
import Faq from "../components/Faq";

const Index = () => {
  return (
    <div>
      <Jumbotron title="FAQs" />
      <Container>
        <SectionStyle>
          <Row>
            <Col md={12}>
              <Faq />
            </Col>
          </Row>
        </SectionStyle>
      </Container>
    </div>
  );
};
export default Index;
