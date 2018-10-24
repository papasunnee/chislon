import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import RightSection from "../../components/General/RightSection";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class About extends Component {
  state = {};
  render() {
    return (
      <Layout title="United Kingdom">
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
          title="UNITED KINGDOM"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>United Kingdom immigration and work visas</h1>
            </div>
            <div className="col-md-8">
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-md-6">
                  <img
                    src="/static/country/uk.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <p>
                    UK Immigration is popular with a range of visa options for
                    employers businessmen and others.We provide details of visa
                    schemes including Tier 2 visa scheme and Tier 2 sponsorship
                    licences.
                  </p>
                </div>
                <div className="col-md-12">
                  <MyAccordion />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RightSection />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
