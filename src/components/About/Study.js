import React from "react";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";

const Study = () => {
  return (
    <SectionStyle className="studySectionStyle">
      <Row>
        <Col md="12">
          <div>
            <Heading3Style>
              STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD
            </Heading3Style>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet?
            </p>
          </div>
        </Col>
        <Col md={12}>
          <Row>
            {Visas.map(({ image, text }, index) => {
              return (
                <Col md={6} key={index}>
                  <div className="flexPanel">
                    <img
                      className="img-fluid"
                      src={`/static/images/home/${image}`}
                      alt=""
                    />
                    <div>
                      <Heading3Style>
                        GET YOUR <span>{text}</span>
                      </Heading3Style>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quasi deserunt cum odio tempora tempore! Magnam
                        minima quos obcaecati, possimus illo atque impedit
                        cupiditate dicta repudiandae laborum deleniti vitae
                        suscipit ametLorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quasi deserunt cum odio tempora
                        tempore! Magnam minima quos obcaecati, possimus illo
                        atque impedit cupiditate dicta repudiandae laborum
                        deleniti vitae suscipit amet?
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <style>
        {`
        .studySectionStyle{
          padding : 4rem 2rem ;
          background-color: #f2f2f2 ;
        }
        span{
          color : #FFDA42 ;
          text-transform : uppercase ;
        }
        .flexPanel{
          display: flex;
          margin :2rem 0 ;
          justify-content: center;
        }
        .flexPanel img{
          max-width : 200px ;
          margin : 0 10px ;
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
