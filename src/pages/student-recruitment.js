import React from "react";
import Jumbotron from "../components/Jumbotron";
import InternationalPartners from "../components/InternationalPartners";
import InternationalRecruitmentForm from "../components/Forms/InternationalRecruitmentForm";

const Index = () => {
  return (
    <div>
      <Jumbotron
        title="STUDENT RECRUITMENT"
        image="service/student-recruitment.jpg"
      />
      <InternationalPartners />
      <InternationalRecruitmentForm />
    </div>
  );
};
export default Index;
