import React, { Fragment } from "react";
import { Jumbotron, Button } from "reactstrap";

const Index = ({ title, image = "about/about.jpg", children }) => {
  return (
    <Fragment>
      <section className="myJumbo">
        <Jumbotron
          style={{
            padding: 0,
            minHeight: "400px",
            backgroundImage: `url(/static/images/${image}), linear-gradient(160.13deg, #003E52 -0.69%, #00B8F2 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {title && <div className="title">{title || "ABOUT US"}</div>}
          {children}
        </Jumbotron>
      </section>
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
          .myJumbo {
            background-image: red;
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: contain;
            position: relative;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Index;
