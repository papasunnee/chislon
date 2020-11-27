import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="INTERNATIONAL PARTNERS" />
      <DoubleColumn heading="International Partners Heading" />
      <DoubleColumn heading="International Partners Heading" />
      <ContactHere />
    </Fragment>
  );
};
