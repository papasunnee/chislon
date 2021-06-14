import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Jumbotron, Row } from "reactstrap";
import "./index.scss";

export const PopularDestination = () => {
  return (
    <Fragment>
      <Container>
        <Row className="row">
          <div className="country_flag_wrapper">
            {flags.map((flag, index) => {
              return (
                <Link href={flag.href} key={index}>
                  <a className="country_flag">
                    <img
                      src={`/static/images/flags/${flag.logo}`}
                      classNaME="img-fluid"
                    />
                    {/* <p>{flag.name}</p> */}
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

export const CountryJumbo = ({ title, country = "usa.jpg" }) => (
  <Fragment>
    <Jumbotron
      fluid
      className="addOverlay"
      // style={{ backgroundImage: `url('/static/images/flags/study about.png')` }}
      style={{ backgroundImage: `url('/static/images/flags/${country}')` }}
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

export const flags = [
  {
    name: "Antigua Barbuda",
    href: "/country/antigua-barbuda",
    logo: "barbuda.jpg",
  },
  { name: "Bulgaria", href: "/country/bulgaria", logo: "bulgaria.jpg" },
  {
    name: "Quebec, Canada",
    href: "/country/quebec-canada",
    logo: "canada.jpg",
  },
  { name: "Cyprus", href: "/country/cyprus", logo: "cyprus.jpg" },
  { name: "Dominica", href: "/country/dominica", logo: "dominica.jpg" },
  { name: "Grenada", href: "/country/grenada", logo: "grenada.jpg" },
  { name: "Hungary", href: "/country/hungary", logo: "hungary.jpg" },
  { name: "Montenegro", href: "/country/montenegro", logo: "montenegro.jpg" },
  { name: "Portugal", href: "/country/portugal", logo: "portugal.jpg" },
  // {
  //   name: "Saint Lucia",
  //   href: "/country/saint-lucia",
  //   logo: "saint-lucia.jpg",
  // },
  {
    name: "United Kingdom",
    href: "/country/united-kingdom",
    logo: "united-kingdom.jpg",
  },
  { name: "USA", href: "/country/usa", logo: "usa.jpg" },
];
