import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="MONTENEGRO"
        className="montenegro"
        country="montenegro"
      />
      <CountryBody title="MONTENEGRO" />
    </Fragment>
  );
};
