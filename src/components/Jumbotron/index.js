import React, { Fragment } from "react";
import { Jumbotron, Button } from "reactstrap";

const Index = props => {
  return (
    <Fragment>
      <Jumbotron>
        <div className="title">{props.title || "ABOUT US"}</div>
        {props.children}
      </Jumbotron>
      <style jsx>
        {`
          .title {
            position: absolute;
            top: 30px;
            background-color: #cea600;
            left: 0;
            padding: 5px 10px;
            width: 200px;
            text-align: center;
            color: #fff;
            font-weight: 600;
            clip-path: polygon(0 0, 82% 0, 100% 100%, 0% 100%);
          }
          .jumbotron {
            background-image: url(/static/images/contact/contact.jpg) !important;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Index;
