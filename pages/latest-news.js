import React, { Component } from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Layout from "../components/Layout";
import GetStarted from "../components/General/GetStarted";
import PageHeader from "../components/General/PageHeader";

class News extends Component {
  state = {};
  render() {
    return (
      <Layout title="Latest News :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/latestnews.png)",
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
          title="Latest News"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <div className="container" style={{ display: "block" }}>
          <div className="row">
            <div className="col-md-4">
              <LatestNews />
            </div>
            <div className="col-md-4">
              <LatestNews />
            </div>
            <div className="col-md-4">
              <LatestNews />
            </div>
          </div>
          <br />
          <br />
          <GetStarted />
        </div>
      </Layout>
    );
  }
}

export default News;
