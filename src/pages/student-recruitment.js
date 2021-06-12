import React from "react";
import Jumbotron from "../components/Jumbotron";
import InternationalPartners from "../components/InternationalPartners";
import InternationalRecruitmentForm from "../components/Forms/InternationalRecruitmentForm";

const Index = () => {
  return (
    <div>
      <Jumbotron title="STUDENT RECRUITMENT" />
      <InternationalPartners />
      <InternationalRecruitmentForm />
    </div>
  );
};
export default Index;