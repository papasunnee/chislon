import React, { Fragment } from "react";
import Jumbotron from "../Jumbotron";

const AboutJumbotron = () => {
  return (
    <Fragment>
      <Jumbotron image="about/about.png">
        <section className="aboutJumboBg p-5">
          <div className="jumbotronContent">
            {/* <h4 className="display-5">ABOUT INTERNATIONAL INSTITUTE</h4> */}
          </div>
        </section>
      </Jumbotron>
      <style jsx>{`
        .aboutJumboBg {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          min-height: inherit;
        }
        .jumbotronContent {
          max-width: 500px;
          margin: auto;
          text-align: center;
          height: 100%;
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
