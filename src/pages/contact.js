import React, { Fragment } from "react";
import ContactJumbotron from "../components/Contact/Jumbotron";
import ServiceLists from "../components/Services/ServiceLists";

const Contact = () => {
  return (
    <Fragment>
      <ContactJumbotron />
      <ServiceLists />
    </Fragment>
  );
};
export default Contact;
