import React, { Fragment } from "react";
import Jumbotron from "../Jumbotron";

const AboutJumbotron = ({
  title = "",
  image = "about/about.jpg",
}) => {
  return (
    <Fragment>
      <Jumbotron image={image}>
        <section className="p-5">
          <div className="jumbotronContent">
            <h4 className="display-5">{title}</h4>
          </div>
        </section>
      </Jumbotron>
      <style jsx>{`
        .jumbotronContent {
          max-width: 800px;
          margin: auto;
          text-align: center;
        }
        .jumbotronContent h4 {
          color: #ffda42;
          font-weight: 300;
        }
        .jumbotronContent p {
          color: #fff;
        }
      `}</style>
    </Fragment>
  );
};

export default AboutJumbotron;
