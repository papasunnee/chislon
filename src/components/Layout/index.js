import React, { Fragment } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Index = props => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
};
export default Index;
