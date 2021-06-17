import React from "react";
import Jumbotron from "../components/Jumbotron";
import Partners from "../components/Common/Logos";
import JobSeekerForm from "../components/Forms/JobSeekerForm";

const Index = () => {
  return (
    <div>
      <Jumbotron title="JOB SEEKERS" image="jobseeker/header.jpg" />
      <Partners />
      <JobSeekerForm />
    </div>
  );
};
export default Index;
