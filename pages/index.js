import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Header from "../components/Header";
import WhatWeDo from "../components/Header/Home/WhatWeDo";
import Layout from "../components/Layout";
import Immigration from "../components/General/Immigration";
import MyCarousel from "../components/Header/MyCarousel";
import MyCarousel1 from "../components/Header/MyCarousel1";

class Index extends Component {
  state = {};
  render() {
    const stages = [
      {
        name: "INTERNATIONAL HEADHUNTING",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos.",
        imageUrl: "/static/hh.jpg",
        imageTitle: "WORK VISAS"
      },
      {
        name: "INTERNATIONAL STUDENTS",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos.",
        imageUrl: "/static/home1.png",
        imageTitle: "Student Visas"
      },
      {
        name: "INTERNATIONAL BUSINESS ADVISORY",
        stageContent: "Sed ut perspiciatis unde omnis iste natus",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos. A, adipisci expedita deserunt id in molestiae consectetur quam dolorum veniam autem sed quae deleniti eveniet atque nemo enim, repellendus quo quos.",
        imageUrl: "/static/iba.jpg",
        imageTitle: "Investor Visas"
      }
    ];
    return (
      <Layout title="Home :: CHISLON">
        <div
          style={{
            height: "100vh",
            textAlign: "center"
          }}
        >
          <Header />
          {/* <MyCarousel /> */}
          <MyCarousel1 />
        </div>
        <div className="container" style={{ padding: "100px 0px" }}>
          <div className="container">
            {stages.map(stage => {
              return (
                <Row style={{ padding: "50px 0px" }}>
                  <Col md={6}>
                    <h2>{stage.name}</h2>
                    <h5>We offer global mobility services</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quasi deserunt cum odio tempora tempore! Magnam minima
                      quos obcaecati, possimus illo atque impedit cupiditate
                      dicta repudiandae laborum deleniti vitae suscipit amet?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quasi deserunt cum odio tempora tempore! Magnam minima
                      quos obcaecati, possimus illo atque impedit cupiditate
                      dicta repudiandae laborum deleniti vitae suscipit amet?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quasi deserunt cum odio tempora tempore! Magnam minima
                      quos obcaecati, possimus illo atque impedit cupiditate
                      dicta repudiandae laborum deleniti vitae suscipit amet?
                    </p>
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
                  <Col md={5}>
                    <p
                      style={{
                        borderTop: "8px solid #CEA600",
                        borderBottom: "8px solid #CEA600",
                        padding: "10px 15px",
                        boxSizing: "border-box",
                        textAlign: "center",
                        backgroundColor: "#F8F7F5"
                      }}
                    >
                      <h3
                        style={{ color: "#3b5998", textTransform: "uppercase" }}
                      >
                        {stage.imageTitle || "Title Here"}
                      </h3>
                      <img src={stage.imageUrl} style={{ width: "100%" }} />
                    </p>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
        <WhatWeDo />
        <Immigration />
        <style jsx>
          {`
            img {
              transition: 0.5s;
            }
            img:hover {
              filter: grayscale(50%);
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
