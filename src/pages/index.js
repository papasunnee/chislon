import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Study from "../components/Home/Study";
import CategoryRow from "../components/Home/CategoryRow";
import ServiceOptions from "../components/Home/ServiceOptions";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <Study />
      <ServiceOptions />
      <CategoryRow />
    </Fragment>
  );
};
export default Index;
