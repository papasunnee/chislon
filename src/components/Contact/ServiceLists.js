import React from "react";
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
                <Col sm={12} md={1}>
                  <div className="form-group">
                    <label>Salutation</label>
                    <select name="" id="" className="form-control">
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof.">Prof.</option>
                    </select>
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Media Organization</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Position</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Nationality</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Country of Residence</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Website</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Email (Repeat) </label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Note</label>
                    <p>
                      All information provided is kept highly confidential and
                      subject to our privacy policy.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea className="form-control" rows="10" />
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
         margin : 20px auto ;
         background-color : #e5e5e5 ;
         padding : 30px ;
        }
        .formWrapper label{
          display : block ;
        }
        .form-group .form-control {
          border-radius: 0;
          border: 0;
          box-shadow: none; 
        }
        .form-group .form-control:focus {
          box-shadow: -1px 3px 11px -3px #01384B;
          border : 1px solid #01384B ;
        }
        textarea,
        textarea:focus{
          resize : none ;
          outline:none ;
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
  { text: "Holidays & Leisure", image: "holiday.jpg" },
];
