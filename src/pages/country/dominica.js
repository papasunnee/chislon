import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="DOMINICA" className="dominica" country="dominica" />
      <CountryBody title="DOMINICA" />
    </Fragment>
  );
};
