import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Study from "../components/Home/Study";
import CategoryRow from "../components/Home/CategoryRow";
import VideoSection from "../components/Home/VideoSection";
import Events from "../components/Home/Events";
import Immigrations from "../components/Home/Immigrations";
import Destinations from "../components/Home/Destinations";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <Study />
      <CategoryRow />
      <VideoSection />
      <Events />
      <Immigrations />
      <Destinations />
    </Fragment>
  );
};
export default Index;
