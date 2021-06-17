import React from "react";
import Jumbotron from "../components/Jumbotron";
import Partners from "../components/Common/Logos";
import EmployerForm from "../components/Forms/EmployerForm";

const Index = () => {
  return (
    <div>
      <Jumbotron title="EMPLOYERS" image="employer/employer.jpg" />
      <Partners />
      <EmployerForm />
    </div>
  );
};
export default Index;
