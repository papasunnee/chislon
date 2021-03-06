import React, { Component } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import GetStarted from "../components/General/GetStarted";
import PageHeader from "../components/General/PageHeader";

class Registration extends Component {
  state = {};
  render() {
    return (
      <Layout title="Registration :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/register.png)",
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
          title="Registration"
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
            <div className="col-md-6 col-md-offset-3">
              <div
                style={{
                  width: "100%",
                  padding: "20px",
                  height: "100%",
                  backgroundColor: "#F8F7F5"
                }}
              >
                <h5 style={{ paddingBottom: "20px" }}>Email Us</h5>
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
          <br />
          <br />
        </div>
      </Layout>
    );
  }
}

export default Registration;
