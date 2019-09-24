import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import SectionStyle from "../styles/SectionStyle";
import { Col, Row } from "reactstrap";

const CategoryRow = () => {
  return (
    <Fragment>
      <SectionStyle className="gradientBg">
        <Row>
          <Col md={12} className="text-center">
            <h3 style={{ color: "#fff" }}>SEE HOW CHISLON WORKS</h3>
            <p style={{ color: "#fff" }}>Learn More | Watch Video</p>
          </Col>

          <Col md={12}>
            <div className="videoWrapper">
              <ReactPlayer
                url="https://youtu.be/0IQkXUqc-14"
                playing={false}
                control="true"
              />
            </div>
          </Col>
        </Row>
      </SectionStyle>
      <style jsx>{`
        .videoWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Fragment>
  );
};

export default CategoryRow;
