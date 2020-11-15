import React, { Fragment } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="STUDY ABROAD" />
      <Container>
        <Row>
          <Col md={12}>
            <h3>GREAT OPPORTUNITIES WITHIN SHORTAGE OCCUPATIONS</h3>
          </Col>

          <Col md={{ size: 5 }}>
            <CountryBox country="U.S.A" href="/usa" />
          </Col>
          <Col md={2}></Col>
          <Col md={{ size: 5 }}>
            <CountryBox country="UK" href="/united-kingdom" />
          </Col>
          <Col md={{ size: 5 }}>
            <CountryBox country="CANADA" href="quebec-canada" />
          </Col>
          <Col md={2}></Col>
          <Col md={{ size: 5 }}>
            <CountryBox country="AUSTRALIA" href="/australia" />
          </Col>
          <Col md={{ size: 5 }}>
            <CountryBox country="CANADA" href="quebec-canada" />
          </Col>
          <Col md={2}></Col>
          <Col md={{ size: 5 }}>
            <CountryBox country="AUSTRALIA" href="/australia" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export const CountryBox = ({ country = "USA", href = "" }) => {
  return (
    <Fragment>
      <Link href={`/country${href}`}>
        <a className="country">
          <span>{country}</span>
        </a>
      </Link>
      <style jsx>
        {`
          .country {
            border: 1px solid #b2b2b2;
            background-color: #ebebeb;
            height: 350px;
            margin: 50px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: bold;
            transition: all 0.5s ease-in;
            text-decoration: none;
          }
          .country:hover {
            background-color: #fcfcfc;
          }
        `}
      </style>
    </Fragment>
  );
};
