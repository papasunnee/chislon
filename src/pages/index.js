import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import Study from "../components/Home/Study";
import CategoryRow from "../components/Home/CategoryRow";
import VideoSection from "../components/Home/VideoSection";
import Events from "../components/Home/Events";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <Study />
      {/* <Jumbotron /> */}
      <CategoryRow />
      <VideoSection />
      <Events />
    </Fragment>
  );
};
export default Index;
