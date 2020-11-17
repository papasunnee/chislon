import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="WORK ABROAD" />
      <DoubleColumn heading="Work Abroad Heading" />
      <DoubleColumn heading="Work Abroad Heading" />
      <ContactHere />
    </Fragment>
  );
};
