import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import PageHeader from "../../components/General/PageHeader";
import TextContent from "../../components/General/TextContent";

class BusinessInvestment extends Component {
  state = {};
  render() {
    return (
      <Layout title="Services :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/about/holiday.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            height: "60vh",
            textAlign: "center"
          }}
        >
          <Header />
        </div>
        <PageHeader
          title="Holiday and Leisure"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <TextContent />
      </Layout>
    );
  }
}

export default BusinessInvestment;
