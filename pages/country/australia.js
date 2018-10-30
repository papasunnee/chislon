import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Link from "next/link";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class Australia extends Component {
  state = {};
  render() {
    const detail = [
      {
        title: "Australia skilled immigration",
        message:
          "Australia is an incredibly popular destination for skilled migrants, with over 128,500 places available in 2015-2016 under the country's General Skilled Migration (Skillselect) program. Under the Skillselect program skilled worker applicants can gain a permanent Australia visa; using their qualifications, work experience and language ability to meet the Australian immigration requirements. The General Skilled Migration (Skillselect) program replaced all other Australian skilled worker visas in 2012-2013. The system has 5 visa subclasses, and is points...Read more"
      },
      {
        title: "Australian Temporary Work Visas",
        message:
          "Australian temporary work visas such as the 457 work visa and working holidaymaker subclass 417 visa may be better options in many cases than the permanent skilled immigration categories. 457 Work Visa : for skilled workers who want to work in Australia for up to 4 years. Workers must be sponsored by an employer to obtain this visa Working Holiday visa (Subclass 417) : a very popular option for young people from around the world,...Read more"
      },
      {
        title: "Australia Business and investment visas",
        message:
          "The Business Innovation and Investment (Provisional) visa (subclass 188) replaced most other Australian business and investment visas in 2012. This visa is split into 4 streams, each catering to a different category of businessperson or investor, each of which can lead to legal permanent residence in Australia under the Business Innovation and Investment (Permanent) visa (subclass 888). Applicants can normally apply for legal permanent residence after 12 months in Australia. Applicants for this visa must...Read more"
      },
      {
        title: "Australia Student Visas",
        message:
          "International students have a variety of options for studying in Australia, and tens of thousands of students travel to the country every year to take advantage of the high level of education offered. From primary school all the way to post graduate study, our team can help you get the most out of your studies in Australia. Australian Student Visa Subclasses The Australian student visas system currently has 8 subclasses: Independent ELICOS Visa (Subclass 570)...Read more"
      },
      {
        title: "Australian Family Visas",
        message:
          "Australian Partner visas If you plan to marry, are married to, or are in a committed relationship with an Australian citizen or permanent resident, you may be able to obtain a partner-based visa for immigration to Australia. The Australian citizen/permanent resident will act as a sponsor for your visa. This means that your sponsor will provide a written statement pledging to support you for your first two years in Australia, including accommodation and financial assistance...Read more"
      },
      {
        title: "Australian Visitor Visas",
        message:
          "Nationals of many Countries wishing to visit Australia for business visits and tourist visits can apply for a visa online. To do so, you must be a citizen of an eligible country. If you are a citizen of a European country, you can apply for an eVisitor Subclass 651 visa . If you are a citizen of Brunei, Canada, Japan, South Korea, Malaysia, Singapore, Hong Kong, or the United States, you can apply for an...Read more"
      },
      {
        title: "Useful Information for Immigrants to Australia",
        message:
          "Chislon Broadway have compiled up-to-date and useful information for you about living and working in Australia. We've also partnered with many reputable organizations that will help your transition go as smoothly as possible. If you're planning to move to Australia, we hope our moving guide and our partner organizations will be able to help you. Contents: IELTS - International English Language Testing System to Improve English ability Regional Australia - Low Population Growth Metropolitan Areas Australian...Read more"
      },
      {
        title: "Australian Visas that are no longer in use",
        message:
          "This section is an archive of Australian visas that are no longer in use.Read more"
      }
    ];
    return (
      <Layout title="Australia">
        <div
          style={{
            backgroundImage: "url(/static/country/australia-h.jpg)",
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
          title="AUSTRALIA"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
          image="/static/country/australia.png"
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
                <Link href="/country/usa">
                  <a>
                    <img
                      src="/static/country/usa2.jpg"
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

export default Australia;
