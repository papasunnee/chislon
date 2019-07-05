import React, { Fragment } from "react";
import AboutJumbotron from "../components/About/Jumbotron";
import Download from "../components/About/Download";
import Study from "../components/About/Study";

const Index = () => {
  return (
    <Fragment>
      <AboutJumbotron />
      <Download />
      <Study />
    </Fragment>
  );
};
export default Index;
