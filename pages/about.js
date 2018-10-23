import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Header from "../components/Header";
import WhatWeDo from "../components/Header/Home/WhatWeDo";
import SuccessStories from "../components/Header/Home/SuccessStories";
import Layout from "../components/Layout";
import AboutRow from "../components/About/AboutRow";
import GetStarted from "../components/General/GetStarted";
import PageHeader from "../components/General/PageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <Layout title="About Page">
        <div
          style={{
            backgroundImage: "url(/static/about.png)",
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
          title="About"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <div className="container">
          <AboutRow title="Our History" image="history" />
          <AboutRow title="Our Mission" image="mission" />
          <AboutRow title="Our Expertise" image="expertise" />
          <AboutRow title="Our Location" image="location" />
          <AboutRow title="Management Team" />
          <AboutRow title="Company Brohure" image="brochure" />
          <AboutRow title="Frequently Asked Questions" />
        </div>
      </Layout>
    );
  }
}

export default About;
