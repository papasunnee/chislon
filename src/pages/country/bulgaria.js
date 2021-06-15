import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="BULGARIA" className="bulgaria" country="bulgaria" />
      <CountryBody title="BULGARIA" />
    </Fragment>
  );
};
