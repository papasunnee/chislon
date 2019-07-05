import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import Heading3Style from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";

const Study = () => {
  return (
    <SectionStyle className="serviceSectionStyle">
      <Row>
        <Col md={12}>
          <div className="formWrapper">
            <Heading3Style>Enquiry Form</Heading3Style>
            <p>Send us a message</p>
            <form>
              <Row>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Country of Residence</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Select Service</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea className="form-control" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group text-center">
                    <ButtonStyle>SEND MESSAGE</ButtonStyle>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
      <style>
        {`
        .serviceSectionStyle{
          padding : 5rem 3rem ;
          background-color: #f2f2f2 ;
        }
       .formWrapper{
         max-width : 500px ;
         margin : 20px auto ;
         background-color : #e5e5e5 ;
         padding : 30px ;
        }
        .formWrapper label{
          display : block ;
        }
        textarea,
        textarea:focus{
          resize : none ;
          outline:none ;
          box-shadow: none;
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
