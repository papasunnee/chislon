import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import JoinUsForm, { TextTop } from "../components/Forms/JoinUsForm";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="LOCATIONS" country="leadership-team.png" />
      <DoubleColumn heading="Locations Heading" />
      <DoubleColumn heading="Locations Heading" />
      {/* <TextTop title="Your journey begins with Chislon Broadway" /> */}
      <JoinUsForm />
      <ContactHere />
    </Fragment>
  );
};
