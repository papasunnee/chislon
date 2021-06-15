import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="HUNGARY" className="hungary" country="hungary" />
      <CountryBody title="HUNGARY" />
    </Fragment>
  );
};
