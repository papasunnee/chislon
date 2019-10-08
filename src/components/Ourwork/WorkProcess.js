import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import "./WorkProcess.css";

const Ourwork = () => {
  return (
    <Fragment>
      <Container fliud>
        <SectionStyle>
          <Row>
            <Col md={12}>
              <div className="workWrapper">
                {WorkList.map((work, index) => {
                  return (
                    <div className="work" key={index}>
                      <img src={`/static/images/${work.image}`} />
                      <div>
                        <h6>{work.title}</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quia necessitatibus, soluta harum nemo laborum
                          suscipit
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </SectionStyle>
      </Container>
      <style jsx>
        {`
          .workWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .work {
            display: flex;
            min-width: 300px;
            max-width: 800px;
            border: 1px solid #e5e5e5;
            margin: 10px;
            padding: 20px;
            margin-bottom: 5rem;
            background: #e5e5e5;
            position: relative;
          }
          .work:before {
            content: "";
            position: absolute;
            right: 50%;
            top: 90%;
            width: 0;
            height: 0;
            transform: rotate(270deg);
            border-top: 30px solid transparent;
            border-right: 30px solid #e5e5e5;
            border-bottom: 30px solid transparent;
          }
          .work img {
            width: 70px;
            height: 70px;
            margin-right: 2rem;
          }
          .work h6 {
            color: #003e52;
            font-size: 0.9rem;
            margin: 10px auto;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Ourwork;

const WorkList = [
  { title: "REGISTRATION", image: "registration.png" },
  { title: "MIGRATION EXPLORATORY MEETING", image: "migration.png" },
  { title: "DOCUMENTS COLLECTION AND REVIEW", image: "documents.png" },
  { title: "LUNCH VISA APPLICATION AND FOLLOW UP", image: "follow.png" },
  { title: "RESULT REVIEW AND CLOSE FILE", image: "review.png" }
];
