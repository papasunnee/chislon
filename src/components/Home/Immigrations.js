import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";

const Immigrations = () => {
  return (
    <SectionStyle className="fluid" style={{ backgroundColor: "#F2F2F2" }}>
      <Container fluid>
        <Row>
          <Col md={12}>
            <HeadingStyle style={{ margin: "2rem 0" }}>
              LATEST IMMIGRATION NEWS
            </HeadingStyle>
          </Col>
          <Col md={3}>
            <img
              className="img-fluid flags"
              src="/static/images/home/flags/uk.png"
            />
            <span>United Kingdom</span>
            <p>
              UK Immigration is possible for highly skilled immigrants with an
              employer with a Tier 2 sponsorship licence under the tier 2 visa
              scheme.
            </p>
          </Col>
          <Col md={3}>
            <img
              className="img-fluid flags"
              src="/static/images/home/flags/usa.png"
            />
            <span>USA</span>
            <p>
              <span>United Kingdom</span>
              The US non-immigrant and immigrant visa system allows entry of
              skilled workers including under L1, E2, H1B visa schemes.
            </p>
          </Col>
          <Col md={3}>
            <img
              className="img-fluid flags"
              src="/static/images/home/flags/australia.png"
            />
            <span>Australia</span>
            <p>
              The Australian immigration system includes a number of popular
              immigration programs under the SkillSelect system.
            </p>
          </Col>
          <Col md={3}>
            <img
              className="img-fluid flags"
              src="/static/images/home/flags/canada.png"
            />
            <span>Canada</span>
            <p>
              Canada has skilled immigration visa schemes that allows entry of
              hundreds of thousands of skilled immigrants each year under
              Express Entry.
            </p>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .flags {
            width: auto !important;
          }
          img + span {
            color: #cea600;
            font-weight: 600;
            margin-left: 10px;
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default Immigrations;
