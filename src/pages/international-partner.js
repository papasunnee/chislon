import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import CertifiedPartnerForm, {
  TextTop,
} from "../components/Forms/CertifiedPartnerForm";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="INTERNATIONAL PARTNERS"
        country="internationalpartners.png"
      />
      <TextTop title="Become an International Partner" />
      <CertifiedPartnerForm />
      <ContactHere />
    </Fragment>
  );
};
