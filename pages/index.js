import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MyCarousel from "../components/Header/MyCarousel";
import Header from "../components/Header";
import WhatWeDo from "../components/Header/Home/WhatWeDo";
import SuccessStories from "../components/Header/Home/SuccessStories";
import Layout from "../components/Layout";

class Index extends Component {
  state = {};
  render() {
    return (
      <Layout title="Home :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/header.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            height: "100vh",
            textAlign: "center"
          }}
        >
          <Header />
          <MyCarousel />
        </div>
        <div className="container" style={{ padding: "100px 0px" }}>
          <Row>
            <Col md={8}>
              <h2 style={{ width: "350px", color: "#0069D2" }}>
                Need help getting somewhere?
              </h2>
              <h5>We offer global mobility services</h5>
              <p>
                Ut porttitor ut est eu ornare. In metus dui, suscipit at viverra
                faucibus, accumsan at odio. Duis finibus sollicitudin libero,
                sed tempor diam euismod sed. Sed interdum odio a finibus
                gravida. Aliquam tincidunt nisl nec urna euismod, ullamcorper
                scelerisque magna vulputate. Duis finibus sollicitudin libero,
                sed tempor diam euismod sed. Sed interdum odio a finibus
                gravida. Aliquam tincidunt nisl nec urna euismodl nec. Duis
                finibus sollicitudin libero, sed tempor diam euismod sed. Sed
                interdum odio a finibus gravida. Aliquam tincidunt nisl nec urna
                euismod, ullamcorper scelerisque magna vulputate. Duis finibus
                sollicitudin libero, sed tempor diam euismod sed. Sed interdum
                odio a finibus gravida. Aliquam tincidunt nisl nec urna euismodl
                nec.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="/static/homeLeft.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
        <WhatWeDo />
        <SuccessStories />
      </Layout>
    );
  }
}

export default Index;
