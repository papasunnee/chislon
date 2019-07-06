import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";

const Study = () => {
  return (
    <SectionStyle className="serviceSectionStyle">
      <Row>
        <Col md={12}>
          <Row>
            {Services.map(({ image, text }, index) => {
              return (
                <Col md={4} key={index}>
                  <div className="flexPanel">
                    <img
                      className="img-fluid"
                      src={`/static/images/services/${image}`}
                      alt="No Image"
                    />
                    <div>
                      <Heading3Style>{text}</Heading3Style>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quasi deserunt cum odio tempora tempore! Magnam
                        minima quos obcaecati, possimus illo atque impedit
                        cupiditate dicta repudiandae laborum deleniti vitae
                        suscipit amet.
                      </p>
                      <p>
                        <Link href="">
                          <a className="readMore">Read More</a>
                        </Link>
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
        .serviceSectionStyle{
          padding : 5rem 3rem ;
          background-color: #f2f2f2 ;
        }
        span{
          color : #FFDA42 ;
          text-transform : uppercase ;
        }
        .flexPanel{
         
        }
        .flexPanel img{
          margin: 10px 0 ;
        }
        .readMore, .readMore:hover{
            float : right ;
            background-color : #e5e5e5 ;
            padding : 5px 15px ;
            border-radius : 5px ;
            text-decoration : none ;
        }
      `}
      </style>
    </SectionStyle>
  );
};

export default Study;

const Services = [
  { text: "Business Investment", image: "business.jpg" },
  { text: "Professional Work", image: "work.jpg" },
  { text: "Education", image: "education.jpg" },
  { text: "Residency & Citizenship ", image: "residency.jpg" },
  { text: "Medical Treatment", image: "medical.jpg" },
  { text: "Holidays & Leisure", image: "holiday.jpg" }
];
