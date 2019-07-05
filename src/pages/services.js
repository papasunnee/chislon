import React, { Fragment } from "react";
import ServicesJumbotron from "../components/Services/Jumbotron";
import ServiceLists from "../components/Services/ServiceLists";

const Index = () => {
  return (
    <Fragment>
      <ServicesJumbotron />
      <ServiceLists />
    </Fragment>
  );
};
export default Index;
