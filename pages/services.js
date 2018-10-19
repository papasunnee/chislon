import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AboutRow from "../components/About/AboutRow";
import GetStarted from "../components/General/GetStarted";
import PageHeader from "../components/General/PageHeader";
import AboutRow2 from "../components/About/AboutRow2";

class About extends Component {
  state = {};
  render() {
    return (
      <Layout title="About Page">
        <div
          style={{
            backgroundImage: "url(/static/services.png)",
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
          title="Services"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <div className="container">
          <AboutRow title="Business & Investment" image="business" />
          <AboutRow2 title="Professional Work" image="professional" />
          <AboutRow title="Education" image="education" />
          <AboutRow2 title="Sports & Entertainment" image="sports" />
          <AboutRow title="Medical Treatment" image="medical" />
          <AboutRow2 title="Holidays & Leisure" image="holiday" />
          <GetStarted />
        </div>
      </Layout>
    );
  }
}

export default About;
