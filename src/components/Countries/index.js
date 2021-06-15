import React, { Fragment } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import "./index.scss";

export const PopularDestination = () => {
  return (
    <Fragment>
      <Container>
        <Row className="row">
          <Col md={12}>
            <h2 style={{ textAlign: "center" }}>POPULAR DESTINATION</h2>
          </Col>
        </Row>
        <Row className="row">
          <Marquee>
            <div className="country_flag_wrapper">
              {flags.map((flag, index) => {
                return (
                  <div>
                    <Link href={flag.href} key={index}>
                      <a className="country_flag">
                        <span style={{ display: "block" }}>{flag.name}</span>
                        <img
                          src={`/static/images/flags/homeflags/${flag.logo}`}
                          classNaME="img-fluid"
                          alt={flag.name}
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </Row>
      </Container>
    </Fragment>
  );
};

const Countries = () => {
  return (
    <Fragment>
      <CountryJumbo title="GLOBAL CITIZEN PROGRAMS" country="usa" />
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

export default Countries;

export const CountryJumbo = ({ title, country = "usa" }) => (
  <Fragment>
    <Jumbotron
      fluid
      className="addOverlay"
      // style={{ backgroundImage: `url('/static/images/flags/study about.png')` }}
      style={{
        backgroundImage: `url('/static/images/flags/homeflags/${country}.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
  </Fragment>
);

export const CountryBody = ({ title = "USA" }) => (
  <Fragment>
    <Container>
      <Row>
        <Col md={12} className="mt-5 mb-3">
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col md={6} className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export const flags = [
  {
    name: "Antigua Barbuda",
    href: "/country/antigua-barbuda",
    logo: "barbuda.png",
  },
  { name: "Bulgaria", href: "/country/bulgaria", logo: "bulgaria.png" },
  {
    name: "Quebec, Canada",
    href: "/country/quebec-canada",
    logo: "canada.png",
  },
  { name: "Cyprus", href: "/country/cyprus", logo: "cyprus.png" },
  { name: "Dominica", href: "/country/dominica", logo: "dominica.png" },
  { name: "Grenada", href: "/country/grenada", logo: "grenada.png" },
  { name: "Hungary", href: "/country/hungary", logo: "hungary.png" },
  { name: "Montenegro", href: "/country/montenegro", logo: "montenegro.png" },
  { name: "Portugal", href: "/country/portugal", logo: "portugal.png" },
  // {
  //   name: "Saint Lucia",
  //   href: "/country/saint-lucia",
  //   logo: "saint-lucia.png",
  // },
  {
    name: "United Kingdom",
    href: "/country/united-kingdom",
    logo: "united-kingdom.png",
  },
  { name: "USA", href: "/country/usa", logo: "usa.png" },
];
