import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Link from "next/link";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class UK extends Component {
  state = {};
  render() {
    const detail = [
      {
        title: "UK Five Tier Points-Based Immigration System",
        message:
          "The United Kingdom's points-based 5 tier visa system is the main uk immigration route for migrants from outside the European Economic Area (EEA) to come to the UK to work, study, invest or train. The system separates applicants into five 'tiers'. In order to be eligible for a visa in any of the five tiers you must pass a points-based assessment. In work visa applications, points are generally awarded according to the applicant's ability, experience...Read more"
      },
      {
        title: "Non Tier UK Business visas",
        message:
          "There are some alternatives to the UK entrepreneur visa that usually requires an investment of £200,000. Businesses and business owners should consider whether it may be possible to come under the Tier 2 sponsorship licence scheme or representative of an overseas business or Turkish businessperson visa. Details on Tier 1 visas for investors and entrepreneurs can be found in our Tier 1 visa section . For other UK business visas which are not included in...Read more"
      },
      {
        title: "UK Visitor Visas",
        message:
          "UK Visitor Visas allow people to enter the UK for short periods for leisure, to engage in limited business activities, or simly to travel through the Uk en route to elsewhere. This section has 3 pages: Standard Visitor Visa : This visa allows people to enter the UK for travel, tourism, and leisure purposes; as well as short term unpaid business appointments, academic conferences, participating in sporting events or creative/artistic work, and receiving private medical...Read more"
      },
      {
        title: "UK Family Visas",
        message:
          "If you are an individual intending to immigrate to the UK with your family, workpermit.com can help. This guide will give you an overview of the main options available before you discuss the details of your position with one of our professional advisers. Please note that if you are a corporation or an individual interested in work visas, student visas, or visas for businesspeople, you can find the information you need on our UK Business...Read more"
      },
      {
        title: "UK Entry Clearance Guide",
        message:
          "Entry clearance is the technical description for obtaining a UK visa. This guide is divided into the sub categories: UK Entry clearance for visitors UK Entry clearance for Tier 2 Visa Applicants UK Entry clearance for the dependants of Tier 2 Visa Applicants UK Entry clearance for Tier 1 Investors, Tier 1 Entrepreneurs, and their dependants UK Entry clearance for Representatives of an Overseas Business Applications UK Entry clearance for visitors For further information please...Read more"
      },
      {
        title: "EEA and Swiss Nationals Working in the UK",
        message:
          "Swiss nationals and EEA nationals have a right to live and work in the United Kingdom. This is called a right of residence. If you are not sure if you are an EEA national, please see the fill list on our Who needs a UK work permit? page. You have a right of residence in the United Kingdom if you are an EEA national and: You are working in the United Kingdom; or You do...Read more"
      },
      {
        title: "UK Permanent Residence and UK Citizenship",
        message:
          "In this section you'll find tips and advice on various aspects of UK immigration, including Indefinite Leave to Remain (permanent residence), and UK Citizenship and Naturalisation. Contents: UK Permanent Residence/Indefinite Leave to Remain Citizenship and Naturalisation in UK Children Born Outside The UK Right of Abode (UK) Long Residence in UKRead more"
      },
      {
        title: "Archive of old UK Visa Categories",
        message:
          "This is an archive of some old UK visa categories that no longer exist. This is provided for information purposes only.Read more"
      }
    ];
    return (
      <Layout title="United Kingdom">
        <div
          style={{
            backgroundImage: "url(/static/country/uk-h.jpg)",
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
                <Link href="/country/canada">
                  <a>
                    <img
                      src="/static/country/canada2.jpg"
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

export default UK;
