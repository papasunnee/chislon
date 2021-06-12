import React, { Fragment } from "react";
import AboutJumbotron from "../components/About/Jumbotron";
import Vision from "../components/About/Vision";
import Partners from "../components/About/Partners";

const Index = () => {
  return (
    <Fragment>
      <AboutJumbotron />
      <Vision />
      <Partners />
    </Fragment>
  );
};
export default Index;
