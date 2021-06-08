import React, { Fragment } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import NewsBar from "../NavBar/NewsBar";

const Index = (props) => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <NewsBar />
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
};
export default Index;
