import React, { Component } from "react";
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
      <Layout title="Services :: CHISLON">
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
          <AboutRow title="Business & Investment" image="business" url="/services/business-investment" />
          <AboutRow2 title="Professional Work" image="professional" url="/services/professional-work" />
          <AboutRow title="Education" image="education" url="/services/education"/>
          <AboutRow2 title="Sports & Entertainment" image="sports" url="/services/sports-and-entertainment" />
          <AboutRow title="Medical Treatment" image="medical" url="/services/medical-treatment" />
          <AboutRow2 title="Holidays & Leisure" image="holiday" url="/services/holiday-and-leisure" />
        </div>
      </Layout>
    );
  }
}

export default About;
