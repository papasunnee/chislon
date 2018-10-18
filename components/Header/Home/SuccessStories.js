import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./SuccessStories.scss";
import GetStarted from "../../General/GetStarted";
export default class SuccessStories extends Component {
  state = {};
  render() {
    const story = [
      {
        name: "Smart Person",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut.",
        image: "url"
      },
      {
        name: "Smart Person",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut.",
        image: "url"
      },
      {
        name: "Smart Person",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut.",
        image: "url"
      },
      {
        name: "Smart Person",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut.",
        image: "url"
      }
    ];
    return (
      <Fragment>
        <div className="container successstories">
          <Container>
            <Row>
              <Col md={12}>
                <h1>
                  SUCCESS STORIES
                </h1>
              </Col>
            </Row>
            <Row>
              {story.map(st => {
                return (
                  <Col md={6}>
                    <div className="successstory">
                      <div className="image">
                        <img src="" alt="" />
                      </div>
                      <h6>{st.name}</h6>
                      <p className="story">{st.detail}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <Row>
              <Col md={12}>
                <GetStarted />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
