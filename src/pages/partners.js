import React from "react";
import Jumbotron from "../components/Jumbotron";
import Partners from "../components/Common/Logos";

const Index = () => {
  return (
    <div>
      <Jumbotron title="PARTNERS" image="partner/partner.jpg" />
      <Partners />
    </div>
  );
};
export default Index;
