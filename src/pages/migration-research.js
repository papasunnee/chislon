import React, { Fragment } from "react";
import AboutJumbotron from "../components/About/Jumbotron";
import Vision from "../components/About/Vision";
import Partners from "../components/About/Partners";

const Index = () => {
  return (
    <Fragment>
      <AboutJumbotron
        // title="MIGRATION RESEARCH"
        image="migration-research/migration-research.jpg"
      />
      <Vision title1="Migration" title2="Research" />
      <Partners />
    </Fragment>
  );
};
export default Index;
