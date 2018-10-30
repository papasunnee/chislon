import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Link from "next/link";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class Canada extends Component {
  state = {};
  render() {
    const detail = [
      {
        title: "Canada skilled immigration - Express Entry",
        message:
          "Over 250,000 new immigrants arrive in Canada every year. Find out more about Canada's immigration options, such as the skilled worker Express Entry system.Read more"
      },
      {
        title: "Canada Work Visa Guide for Employers",
        message:
          "Canada is one of the few countries in the Western World that is actively looking for immigrants, with over 250,000 new immigrants arriving in Canada every year . Independent immigration to Canada used to take a long time to process, meaning directly sponsoring a migrant worker was often the only viable option. However, in January 2015 Canada overhauled their immigration and work permit rules by launching the Express Entry system for hiring skilled long term...Read more"
      },
      {
        title: "Canada Business Visas",
        message:
          "The Canada Business Immigration Category of visas was designed to attract experienced business people to Canada. Successful candidates are those who can invest in Canada, start businesses in Canada and generate revenues and employment for Canadians. In 2013, over 9000 business migrants were allowed entry into Canada. In 2015-2016, the government target is to welcome a similar number of Canada business immigrants. In order to encourage the development of a strong, prosperous economic environment, the...Read more"
      },
      {
        title: "Canada Family Visas",
        message:
          "The Canadian Government does understand that families wish to be together and immigration is permitted for many members of the family. Some family members – such as spouses and dependent children – can be included on the initial visa application for new immigrants to Canada, while parents, grandparents, and others must be sponsored by Canadian citizens and permanent residents. Requirements for family immigration Spouses and Partners Your spouse or common-law partner can normally be included...Read more"
      },
      {
        title: "Canada Student Visas",
        message:
          "With more than 130,000 foreign students coming on student visas to Canada every year, Canada offers a diverse international student community. To study in Canada or any other foreign country is an adventure and a challenge, and you should give careful consideration to where you wish to study in Canada to ensure it is a positive experience. This is something you should do before you even start to apply for your student visa to Canada...Read more"
      },
      {
        title: "Useful Information for Canada",
        message:
          "Here you can find information on a range of Canadian imigration issues. Including a information for Canadian employers, an overview of the differences between lving in Canada and the US, and even resume advice. For more information, or to apply for a visa, please contact us. Further information, help, and advice Workpermit.com's team of specialists has over 25 years of experience in immigration services, and have helped thousands of people to study, work, and invest...Read more"
      },
      {
        title: "Archive of old Canada Visa Categories",
        message:
          "This is an archive of some old Canada visa categories that no longer exist. This is provided for information purposes only.Read more"
      }
    ];
    return (
      <Layout title="Canada">
        <div
          style={{
            backgroundImage: "url(/static/country/canada-h.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "100% 100%",
            height: "50vh",
            textAlign: "center"
          }}
        >
          <Header />
        </div>
        <PageHeader
          title="CANADA"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
          image="/static/country/canada.png"
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
                  <MyAccordion details={detail} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h4>Study, Get a Job or Start a business in</h4>
              </div>
              <div className="">
                <Link href="/country/usa">
                  <a>
                    <img
                      src="/static/country/usa2.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/country/uk">
                  <a>
                    <img
                      src="/static/country/uk2.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/country/australia">
                  <a>
                    <img
                      src="/static/country/australia2.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                </Link>
              </div>
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
        <style jsx>
          {`
            img {
              transition: 0.5s;
              margin: 10px auto;
            }
            img:hover {
              filter: grayscale(50%);
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Canada;
