import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Link from "next/link";
import PageHeader from "../../components/General/PageHeader";
import MyAccordion from "../../components/Country/MyAccordion";

class USA extends Component {
  state = {};
  render() {
    const detail = [
      {
        title: "US Business and work visas",
        message:
          "As the largest economy in the World with the greatest number of opportunities the United States is an incredibly popular immigration destination. The US processes many millions of immigrant and non-immigrant visa applications for workers, businesspeople, investors, family members, every year. The US visa system is probably the most complex in the World. There are so many different visa options that it is difficult to know which visa may be relevant. Generally to enter the...Read more"
      },
      {
        title: "Employers' guide to US immigration",
        message:
          "US immigration for Companies This guide is aimed at businesses, who wish to set up in the US or who already have an established US trading presence and wish to obtain US work visas for their employees or potential employees. The visas most likely to be used by employers are non-immigrant work visa such at the L-1 visa, E-2 visa or H-1B visa. This guide aims to give you an overview of the options open...Read more"
      },
      {
        title: "Employees' guide to US immigration",
        message:
          "US Work Visas – Employee Guide Introduction There are 5 main ways an individual can obtain residency and work authorization in the United States: Sponsorship by an Employer Investment Sponsorship by a close Family Member in the United States The Diversity Visa Lottery Program Asylum & Refugee Status Workpermit.com can help you with the first 4 items from the above list. If you are interested in investment or trade in the USA, please see our...Read more"
      },
      {
        title: "US F-1 and M-1 Student Visas",
        message:
          "The US is a world leader in education, with 46 of the world's top 100 universities on US soil. This popularity has made US educated world leaders commonplace: UN secretary general Kofi Annan, Korean prime minister Kang Young Hoon, and a long list of international Nobel Prize winners all attended US universities. US Student F-1 and M-1 Visa Categories This popularity could have made the US student visa system extremely complex, but luckily the system...Read more"
      },
      {
        title: "US Family Visas",
        message:
          "Helping a family member, whether it is your spouse , fiancé(e), child , parent or brother or sister , become a permanent resident of the US, follows roughly the same procedure as outlined below. It may seem straightforward, but there are many nuances in each type of family-based visa. Please read our site carefully, and if you have any questions, please contact us for more information on family based immigration to the US. First, the...Read more"
      },
      {
        title: "US B-1 and B-2 Visitor Visas",
        message:
          "The US B-1 and B-2 Visitor Visa system allows entry for business and pleasure to the US. We provide guides on the requirements for US B-1 for business and B-2 Visitor pleasure Visas, and on the US Visitor Visa Waiver Pilot Program, which allows citizens of certain 'visa waiver' countries to enter the US by applying for a visa online using the ESTA system. Sections US B-1 Business visitor visa and B-2 Visitor for Pleasure...Read more"
      },
      {
        title: "Guide to US Permanent Residence",
        message:
          "This section contains general advice on mainintaining legal permanent residence in the USA, as well as specific advice for doctors and nurses. For visas which can lead to permanent residence please see our USA Employment based immigration visas (Green Cards) section. Tips for maintaining your permanent residence Help and guidance on how to maintain your permanent residence in the US Permanent residence for doctors Permanent Residence options for doctors Permanent residence for nurses Permanent residence...Read more"
      },
      {
        title: "Guide to Becoming a US Citizen",
        message:
          "Green card holders in the US enjoy many of the same rights of US citizens. Normally, green card holders can live in the US as long as they desire and then can work for almost every kind of employer. However, US citizenship allows some important additional benefits that should be considered. Here are some good reasons why you should consider becoming a US citizen, once you have determined if you are eligible: 1. Patriotism and...Read more"
      },
      {
        title: "Useful information for USA immigration",
        message:
          "Here you will find information which will help in your USA immigration goals. We have information on becoming a US citizen, as well as a detailed relocation guide with tips on everything from buying a home to enrolling your children in school. If you need further information and advice, or you would like to enlist our help in applying for a US visa, please contact us.Read more"
      }
    ];
    return (
      <Layout title="USA">
        <div
          style={{
            backgroundImage: "url(/static/country/usa-h.jpg)",
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
          title="USA"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
          image="/static/country/usa.jpg"
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

export default USA;
