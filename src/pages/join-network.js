import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import JoinUsForm, { TextTop } from "../components/Forms/JoinUsForm";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="JOIN CHISLON" />
      <TextTop title="Your journey begins with Chislon Broadway" />
      <JoinUsForm />
      <ContactHere />
    </Fragment>
  );
};
