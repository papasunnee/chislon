import React from "react";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";

const Study = () => {
  return (
    <SectionStyle className="sectionStyle">
      <Row>
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <Row>
            <Col md={{ size: 3, offset: 1 }} className="my-auto">
              <img
                className="img-fluid"
                style={{ maxWidth: "150px" }}
                src="/static/images/home/bag-briefcase.png"
              />
            </Col>
            <Col md={{ size: 8 }}>
              <div>
                <Heading3Style>
                  STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD
                </Heading3Style>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div className="flexPanel">
            {Visas.map(({ image, text }, index) => {
              return (
                <div className="flexItem" key={index}>
                  <img src={`/static/images/home/${image}`} alt="" />
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
      <style>
        {`
        .sectionStyle{
          background-image: url(/static/images/home/world.png) ;
          background-color: #e5e5e5 ;
          background-size : contain ;
        }
        .flexPanel{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-content: stretch;
          align-items: flex-start;
        }
        .flexItem{
          position : relative ;
          order: 0;
          flex: 0 1 150px;
          align-self: auto;
          margin :  0 10px 10px ;
        }
        .flexItem p{
          position : absolute ;
          text-align : center ;
          top: 50% ;
          left: 50% ;
          color : #fff;
          font-weight : bold ;
          transform: translateX(-50%) translateY(-50%) ;
        }
      `}
      </style>
    </SectionStyle>
  );
};

export default Study;

const Visas = [
  { text: "Medical Visa", image: "medical-visa.png" },
  { text: "Investor Visa", image: "investor-visa.png" },
  { text: "Residency Visa", image: "residency-visa.png" },
  { text: "Student Visa", image: "student-visa.png" },
  { text: "Tourist Visa", image: "tourist-visa.png" },
  { text: "Work Visa", image: "work-visa.png" }
];
