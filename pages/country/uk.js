import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import RightSection from "../../components/General/RightSection";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class UK extends Component {
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
          image="/static/country/uk.png"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-md-6">
                  <p>
                    UK Immigration is popular with a range of visa options for
                    employers businessmen and others.We provide details of visa
                    schemes including Tier 2 visa scheme and Tier 2 sponsorship
                    licences.
                  </p>
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
              <div
                style={{
                  width: "100%",
                  padding: "20px",
                  margin: "20px auto",
                  backgroundColor: "#F8F7F5"
                }}
              >
                <Form>
                  <FormGroup>
                    <Input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="country"
                      name="country"
                      id="country"
                      placeholder="Country of Residence"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="countryCode"
                      name="countryCode"
                      id="countryCode"
                      placeholder="Country Code"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="telephone"
                      name="telephone"
                      id="telephone"
                      placeholder="Telephone"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="Enqiury"
                    />
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default UK;
