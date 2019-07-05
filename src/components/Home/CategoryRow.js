import React, { Fragment } from "react";
import HeadingStyle from "../styles/Heading3";
import SectionStyle from "../styles/SectionStyle";
import { Col, Row } from "reactstrap";

const CategoryRow = () => {
  return (
    <Fragment>
      <SectionStyle className="fluid">
        <Row>
          <Col md={4}>
            <div className="rightBorder">
              <HeadingStyle>International Headhunting</HeadingStyle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quas sunt optio fugit nobis quidem incidunt illo reprehenderit,
                aut inventore maiores dolorum, explicabo culpa nisi earum
                accusamus officia tempore voluptatem?
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="rightBorder">
              <HeadingStyle>International Students</HeadingStyle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quas sunt optio fugit nobis quidem incidunt illo reprehenderit,
                aut inventore maiores dolorum, explicabo culpa nisi earum
                accusamus officia tempore voluptatem?
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <HeadingStyle>International Business Advisory</HeadingStyle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quas sunt optio fugit nobis quidem incidunt illo reprehenderit,
                aut inventore maiores dolorum, explicabo culpa nisi earum
                accusamus officia tempore voluptatem?
              </p>
            </div>
          </Col>
        </Row>
      </SectionStyle>
      <style jsx>{`
        .rightBorder {
          border-right: 1px solid #e5e5e5;
          padding-right: 20px;
        }
        @media (max-width: 767px) {
          .rightBorder {
            border-right: none;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default CategoryRow;
