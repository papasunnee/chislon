import React from "react";
import Jumbotron from "../Jumbotron";

const ServicesJumbotron = () => {
  return (
    <Jumbotron title="SERVICES">
      <section className="jumboBg">
        <div className="jumbotronContent">
          <h4 className="display-5">
            Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
          </h4>
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
          position: relative;
          height: 50vh;
        }
        .jumbotronContent {
          max-width: 500px;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .jumbotronContent h4 {
          color: #ffda42;
          font-weight: 300;
          text-transform: uppercase;
        }
        .jumbotronContent p {
          color: #fff;
        }
      `}</style>
    </Jumbotron>
  );
};

export default ServicesJumbotron;
