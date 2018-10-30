import React, { Component } from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Layout from "../components/Layout";
import TextContent from "../components/General/TextContent";
import PageHeader from "../components/General/PageHeader";

class News extends Component {
  state = {};
  render() {
    return (
      <Layout title="Latest News :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/partnership.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            height: "50vh",
            textAlign: "center"
          }}
        >
          <Header />
        </div>
        <PageHeader
          title="Partners"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />

        <TextContent  image="partnership2.jpg"/>
        <br />
        <br />
      </Layout>
    );
  }
}

export default News;
