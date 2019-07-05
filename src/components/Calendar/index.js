import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import MyCalendar from "../Home/MyCalendar";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";

const Index = () => {
  return (
    <SectionStyle className="serviceSectionStyle">
      <div className="calendarWrapper">
        <Row>
          <Col md={4}>
            <MyCalendar />
          </Col>
          <Col md={8}>Sunday</Col>
        </Row>
      </div>
      <style>
        {`
        .serviceSectionStyle{
          padding : 5rem 3rem ;
          background-color: #f2f2f2 ;
        }
       .calendarWrapper{
         margin : 20px auto ;
         background-color : #e5e5e5 ;
         padding : 30px ;
        }


      `}
      </style>
    </SectionStyle>
  );
};

export default Index;
