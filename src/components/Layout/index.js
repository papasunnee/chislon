import React, { Fragment } from "react";
import NavBar from "../NavBar";

const Index = props => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <NavBar />
        {props.children}
      </div>
    </Fragment>
  );
};
export default Index;
