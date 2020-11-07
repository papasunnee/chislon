import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Jumbotron, Row } from "reactstrap";
import "./index.scss";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="GLOBAL CITIZEN PROGRAMS" />
      <Container>
        <Row className="row">
          <div className="country_wrapper">
            {flags.map((flag, index) => {
              return (
                <Link href={flag.href} key={index}>
                  <a className="country_flag">
                    <p>{flag.name}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export const CountryJumbo = ({ title }) => (
  <Jumbotron fluid className="addOverlay">
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <div className="jumboText text-center text-white">
        <h1 className="display-6">{title}</h1>
        <p className="lead">
          Review available options. Obtain personalized advice. Make the right
          choice.
        </p>
      </div>
    </Container>
  </Jumbotron>
);

export const flags = [
  { name: "Antigua Barbuda", href: "/country/antigua-barbuda" },
  { name: "Bulgaria", href: "/country/bulgaria" },
  { name: "Quebec, Canada", href: "/country/quebec-canada" },
  { name: "Cyprus", href: "/country/cyprus" },
  { name: "Dominica", href: "/country/dominica" },
  { name: "Grenada", href: "/country/grenada" },
  { name: "Hungary", href: "/country/hungary" },
  { name: "Montenegro", href: "/country/montenegro" },
  { name: "Portugal", href: "/country/portugal" },
  { name: "Saint Lucia", href: "/country/saint-lucia" },
  { name: "United Kingdom", href: "/country/united-kingdom" },
  { name: "USA", href: "/country/usa" },
];
