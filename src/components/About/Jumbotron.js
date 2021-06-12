import React, { Fragment } from "react";
import Jumbotron from "../Jumbotron";

const AboutJumbotron = () => {
  return (
    <Fragment>
      <Jumbotron className="customAbout">
        <section className="aboutJumboBg p-5">
          <div className="jumbotronContent">
            <h4 className="display-5">ABOUT INTERNATIONAL INSTITUTE</h4>
          </div>
        </section>
      </Jumbotron>
      <style jsx>{`
        .aboutJumboBg {
          background-image: url(/static/images/about/about.jpg),
            linear-gradient(114.17deg, #003e52 -0.69%, #00b8f2 100%);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: bottom center;
        }

        .jumboBg {
        }
        .jumbotronContent {
          max-width: 500px;
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
