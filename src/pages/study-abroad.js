import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="STUDY ABROAD" />
      <DoubleColumn heading="Study Abroad Heading" />
      <DoubleColumn heading="Study Abroad Heading" />
      <ContactHere />
    </Fragment>
  );
};
