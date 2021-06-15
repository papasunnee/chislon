import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="UNITED KINGDOM"
        className="united-kingdom"
        country="united-kingdom"
      />
      <CountryBody title="UNITED KINGDOM" />
    </Fragment>
  );
};
