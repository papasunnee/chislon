import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import HeadingStyle from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";

export default function Download() {
  return (
    <Fragment>
      <div className="download">
        <Container>
          <Row>
            <Col md={6}>
              <div className="content">
                <img src="/static/images/about/brochurecover.jpg" />
                <div>
                  <HeadingStyle>DOWNLOAD OUR BROCHURE</HeadingStyle>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi deserunt cum odio tempora tempore! Magnam minima quos
                    obcaecati, possimus illo atque impedit cupiditate dicta
                    repudiandae laborum deleniti vitae suscipit amet?
                  </p>
                  <ButtonStyle>DOWNLOAD NOW</ButtonStyle>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="content">
                <img src="/static/images/about/newsletter.png" />
                <div>
                  <HeadingStyle>DOWNLOAD OUR BROCHURE</HeadingStyle>
                  <form>
                    <div className="form-group">
                      <input className="form-control" type="text" />
                    </div>
                    <ButtonStyle>SUBSCRIBE NOW</ButtonStyle>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .download {
            padding: 4rem 2rem;
          }
          .download img {
            max-width: 150px;
            margin: 10px;
          }
          .download .content {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </Fragment>
  );
}
