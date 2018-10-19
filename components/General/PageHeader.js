import { Row, Col } from "reactstrap";

const PageHeader = props => {
  return (
    <div className="container" style={{ padding: "80px 0px" }}>
      <Row>
        <Col md={12}>
          <h1 style={{ textAlign: "center" }}>{props.title}</h1>
        </Col>
        <Col md={12}>
          <p style={{ textAlign: "center" }}>{props.text}</p>
        </Col>
      </Row>
    </div>
  );
};
export default PageHeader;
