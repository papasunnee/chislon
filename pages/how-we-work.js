import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AboutRow from "../components/About/AboutRow";
import GetStarted from "../components/General/GetStarted";
import PageHeader from "../components/General/PageHeader";

class HowWeWork extends Component {
  state = {};
  render() {
    const stages = [
      {
        name: "STAGE 1",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos."
      },
      {
        name: "STAGE 2",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos."
      },
      {
        name: "STAGE 3",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos."
      },
      {
        name: "STAGE 4",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos."
      },
      {
        name: "STAGE 5",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos."
      }
    ];
    return (
      <Layout title="How We Work :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/howwework.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            height: "30vh",
            textAlign: "center"
          }}
        >
          <Header />
        </div>
        <PageHeader
          title="How We Work"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <div className="container">
          {stages.map(stage => {
            return (
              <Row style={{ padding: "50px 0px" }}>
                <Col md={5}>
                  <h2
                    style={{
                      backgroundColor: "#cea600",
                      color: "#fff",
                      textAlign: "center",
                      padding: "8px 0px"
                    }}
                  >
                    {stage.name}
                  </h2>
                  <h3>{stage.stageContent}</h3>
                </Col>
                <Col md={1} sm={0}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      fontSize: "3em"
                    }}
                  >
                    🠊
                  </div>
                </Col>
                <Col md={6}>
                  <p
                    style={{
                      borderTop: "8px solid #CEA600",
                      padding: "10px 15px",
                      boxSizing: "border-box",
                      textAlign: "center",
                      backgroundColor: "#F8F7F5",
                      height: "100%"
                    }}
                  >
                    {stage.text}
                  </p>
                </Col>
              </Row>
            );
          })}

          <GetStarted />
        </div>
      </Layout>
    );
  }
}

export default HowWeWork;
