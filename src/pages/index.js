import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import DoubleColumn from "../components/Home/DoubleColumn";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="my-5"></div>
      <DoubleColumn />
      <div className="my-5"></div>
    </Fragment>
  );
};
export default Index;
