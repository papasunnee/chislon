import React from "react";
import Jumbotron from "../Jumbotron";

const AboutJumbotron = () => {
  return (
    <Jumbotron>
      <section className="jumboBg">
        <div className="jumbotronContent">
          <h4 className="display-5">HISTORY</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
            possimus illo atque impedit cupiditate dicta repudiandae laborum
            deleniti vitae suscipit amet? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quasi deserunt cum odio tempora
            tempore! Magnam minima quos obcaecati, possimus illo atque impedit
            cupiditate dicta repudiandae laborum deleniti vitae suscipit amet?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
            possimus illo atque impedit cupiditate dicta repudiandae laborum
            deleniti vitae suscipit amet? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quasi deserunt cum odio tempora
            tempore! Magnam minima quos obcaecati, possimus illo atque impedit
            cupiditate dicta repudiandae laborum deleniti vitae suscipit amet?
          </p>
        </div>
      </section>
      <style jsx>{`
        .jumboBg {
          background: url(/static/images/about/about.jpg) no-repeat cover/center;
          position: relative;
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
    </Jumbotron>
  );
};

export default AboutJumbotron;
