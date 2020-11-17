import React from "react";
import { Row, Col } from "reactstrap";
import Heading3Style from "../styles/Heading3";
import Container from "reactstrap/lib/Container";
import Link from "next/link";

const ContactHere = () => {
  return (
    <Container fluid style={{ width: "100%", backgroundColor: "#D9A900" }}>
      <Row style={{ margin: 0, padding: "3rem 0" }}>
        <Col sm={{ size: 12 }} style={{ textAlign: "center" }}>
          <Link href="/contact">
            <a
              style={{
                backgroundColor: "#01384B",
                color: "#fff",
                fonrWeight: "bold",
                borderRadius: "10px",
                padding: "1rem 5rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              CONTACT US
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactHere;
