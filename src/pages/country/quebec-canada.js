import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="QUEBEC, CANADA"
        className="canada"
        country="canada"
      />
      <CountryBody title="CANADA" />
    </Fragment>
  );
};
