import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="PORTUGAL" className="portugal" country="portugal" />
      <CountryBody title="PORTUGAL" />
    </Fragment>
  );
};
