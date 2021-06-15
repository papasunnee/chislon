import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CYPRUS" className="cyprus" country="cyprus" />
      <CountryBody title="CYPRUS" />
    </Fragment>
  );
};
