import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="USA" className="usa" country="usa" />
      <CountryBody title="USA" />
    </Fragment>
  );
};
