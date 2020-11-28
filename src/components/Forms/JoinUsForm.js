import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./CertifiedPartnerForm.scss";

const CertifiedPartnerForm = () => {
  return (
    <Container className="mb-5 certifiedPartnerForm">
      <Row>
        <Col md={12}>
          <form>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="" className="">
                    FIRST NAME <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    LAST NAME <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">PHONE</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    COUNTRY OF ACTIVITY <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    TARGET MARRKET(S) <span className="text-danger">*</span>
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">HOW DO WE CONTACT YOU</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">ARE YOU</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">COMNAPY NAME</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    GLOBAL CITIZEN PROGRAM OF INTEREST YOU
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    DO YOU HAVE EXISTING CLIENTS ALREADY ENROLLED IN OTHER
                    PROGRAMS?
                  </label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">QUESTIONS OR COMMENTS</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                  ></textarea>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={12}>
                <input
                  type="button"
                  value="Send Message"
                  className="btn submitButton"
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CertifiedPartnerForm;

export const TextTop = ({ title }) => {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            molestias non libero, iusto aliquam ratione nesciunt perferendis
            nisi obcaecati tempore. Expedita itaque eaque enim earum est, ipsam
            vero quis ut. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus molestias non libero, iusto aliquam ratione nesciunt
            perferendis nisi obcaecati tempore. Expedita itaque eaque enim earum
            est, ipsam vero quis ut. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Natus molestias non libero, iusto aliquam ratione
            nesciunt perferendis nisi obcaecati tempore. Expedita itaque eaque
            enim earum est, ipsam vero quis ut. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus molestias non libero, iusto
            aliquam ratione nesciunt perferendis nisi obcaecati tempore.
            Expedita itaque eaque enim earum est, ipsam vero quis ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
