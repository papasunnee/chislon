import React from "react";
import Jumbotron from "../components/Jumbotron";
import Courses from "../components/Courses";
import CourseForm from "../components/Forms/CourseForm";

const Index = () => {
  return (
    <div>
      <Jumbotron title="EXAM PREPS" />
      <Courses />
      <CourseForm />
    </div>
  );
};
export default Index;
