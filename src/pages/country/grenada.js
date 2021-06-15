import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="GRENADA" className="grenada" country="grenada" />
      <CountryBody title="GRENADA" />
    </Fragment>
  );
};
