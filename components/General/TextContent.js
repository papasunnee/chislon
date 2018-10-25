import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          padding: "15px",
          boxSizing: "border-box"
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                padding: "15px",
                boxSizing: "border-box",
                border: "1px solid #e5e5e5"
              }}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                error repellendus at totam reiciendis, consequuntur
                exercitationem? Illum unde inventore modi a ad animi fugiat
                tenetur labore ratione eum! Dolorem, nesciunt!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                error repellendus at totam reiciendis, consequuntur
                exercitationem? Illum unde inventore modi a ad animi fugiat
                tenetur labore ratione eum! Dolorem, nesciunt!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                error repellendus at totam reiciendis, consequuntur
                exercitationem? Illum unde inventore modi a ad animi fugiat
                tenetur labore ratione eum! Dolorem, nesciunt!
              </p>
            </div>
            <div
              className="col-md-6"
              style={{
                padding: "15px",
                boxSizing: "border-box",
                border: "1px solid #e5e5e5"
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              style={{
                padding: "15px",
                boxSizing: "border-box",
                border: "1px solid #e5e5e5"
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis quibusdam ad ab, recusandae numquam, distinctio nesciunt
                aut quam vitae placeat praesentium ducimus reiciendis, hic
                voluptate ex temporibus tempore blanditiis ratione!
              </p>
            </div>
            <div
              className="col-md-6"
              style={{
                padding: "15px",
                boxSizing: "border-box",
                border: "1px solid #e5e5e5",
                width: "100%",
                backgroundColor: "#F8F7F5"
              }}
            >
              <Form>
                <FormGroup>
                  <Input type="name" name="name" id="name" placeholder="Name" />
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
        <style jsx>{`
          .row {
            margin: 40px 0px;
          }
        `}</style>
      </div>
    );
  }
}
