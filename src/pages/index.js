import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Study from "../components/Home/Study";
import CategoryRow from "../components/Home/CategoryRow";
import ServiceOptions from "../components/Home/ServiceOptions";
import DoubleColumn from "../components/Home/DoubleColumn";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <DoubleColumn />
      {/* <Study /> */}
      <ServiceOptions />
      <CategoryRow />
    </Fragment>
  );
};
export default Index;
