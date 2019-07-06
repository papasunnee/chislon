import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import "./Ourwork.css";

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
                    <div className="work">
                      <img src={`/static/images/${work.image}`} />
                      <h6>{work.title}</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia necessitatibus, soluta harum nemo laborum suscipit
                      </p>
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
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .work {
            max-width: 200px;
            text-align: center;
            margin: 10px;
          }
          .work img {
            width: 70px;
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
