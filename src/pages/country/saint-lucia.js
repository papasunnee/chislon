import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="SAINT LUCIA"
        className="saint-lucia"
        country="saint-lucia"
      />
      <CountryBody title="SAINT LUCIA" />
    </Fragment>
  );
};
