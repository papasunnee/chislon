import React, { Fragment } from "react";
import { Container, Jumbotron, Row } from "reactstrap";
import "./index.scss";

export default () => {
  return (
    <Fragment>
      <Jumbotron fluid className="addOverlay">
        <Container
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <div className="jumboText text-center text-white">
            <h1 className="display-6">GLOBAL CITIZEN PROGRAMS</h1>
            <p className="lead">
              Review available options. Obtain personalized advice. Make the
              right choice.
            </p>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="row">
          <div className="country_wrapper">
            {flags.map((flag, index) => {
              return (
                <a href="" className="country_flag">
                  <p>{flag.name}</p>
                </a>
              );
            })}
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

const flags = [
  { name: "Antigua Barbuda" },
  { name: "Bulgaria" },
  { name: "Quebec, Canada" },
  { name: "Cyprus" },
  { name: "Dominica" },
  { name: "Grenada" },
  { name: "Hungary" },
  { name: "Montenegro" },
  { name: "Portugal" },
  { name: "Saint Lucia" },
  { name: "United Kingdom" },
  { name: "USA" },
];
