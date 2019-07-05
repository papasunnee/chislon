import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Index = props => {
  return (
    <Jumbotron>
      <div className="title">{props.title || "ABOUT US"}</div>
      {props.children}
      <style jsx>
        {`
          .title {
            position: absolute;
            top: 30px;
            left: 0;
            padding: 5px 10px;
            width: 200px;
            text-align: center;
            color: #fff;
            background-color: #cea600;
            font-weight: 600;
          }
        `}
      </style>
    </Jumbotron>
  );
};

export default Index;
