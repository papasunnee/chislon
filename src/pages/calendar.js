import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import Calendar from "../components/Calendar";

const Index = () => {
  return (
    <Fragment>
      <Jumbotron title="Calendar" />
      <Calendar />
    </Fragment>
  );
};
export default Index;
