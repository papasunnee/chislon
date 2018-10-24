import React from "react";
import "./MyAccordion.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

const MyAccordion = () => (
  <Accordion style={{ margin: "20px auto" }}>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>UK Five Tier Points-Based Immigration System</h5>
        {/* <div>With a bit of description</div> */}
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          The United Kingdom's points-based 5 tier visa system is the main uk
          immigration route for migrants from outside the European Economic Area
          (EEA) to come to the UK to work, study, invest or train. The system
          separates applicants into five 'tiers'. In order to be eligible for a
          visa in any of the five tiers you must pass a points-based assessment.
          In work visa applications, points are generally awarded according to
          the applicant's ability, experience...Read more
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>Non Tier UK Business visas</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          There are some alternatives to the UK entrepreneur visa that usually
          requires an investment of £200,000. Businesses and business owners
          should consider whether it may be possible to come under the Tier 2
          sponsorship licence scheme or representative of an overseas business
          or Turkish businessperson visa. Details on Tier 1 visas for investors
          and entrepreneurs can be found in our Tier 1 visa section . For other
          UK business visas which are not included in...Read more UK
          Representative of an overseas business visa UK Turkish Businessperson
          visa
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>UK Visitor Visas</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          UK Visitor Visas allow people to enter the UK for short periods for
          leisure, to engage in limited business activities, or simly to travel
          through the Uk en route to elsewhere. This section has 3 pages:
          Standard Visitor Visa : This visa allows people to enter the UK for
          travel, tourism, and leisure purposes; as well as short term unpaid
          business appointments, academic conferences, participating in sporting
          events or creative/artistic work, and receiving private medical...Read
          more UK Standard Visitor visa UK Permitted Paid Engagement visa Who
          needs a UK visitor visa?
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>UK Family Visas</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          If you are an individual intending to immigrate to the UK with your
          family, workpermit.com can help. This guide will give you an overview
          of the main options available before you discuss the details of your
          position with one of our professional advisers. Please note that if
          you are a corporation or an individual interested in work visas,
          student visas, or visas for businesspeople, you can find the
          information you need on our UK Business...Read more UK Family of a
          settled person visa EEA Family Permit and UK Residence Card UK Parent
          of a Tier 4 child visa British Ancestry visa
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>UK Entry Clearance Guide</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Entry clearance is the technical description for obtaining a UK visa.
          This guide is divided into the sub categories: UK Entry clearance for
          visitors UK Entry clearance for Tier 2 Visa Applicants UK Entry
          clearance for the dependants of Tier 2 Visa Applicants UK Entry
          clearance for Tier 1 Investors, Tier 1 Entrepreneurs, and their
          dependants UK Entry clearance for Representatives of an Overseas
          Business Applications UK Entry clearance for visitors For further
          information please...Read more
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>EEA and Swiss Nationals Working in the UK</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Swiss nationals and EEA nationals have a right to live and work in the
          United Kingdom. This is called a right of residence. If you are not
          sure if you are an EEA national, please see the fill list on our Who
          needs a UK work permit? page. You have a right of residence in the
          United Kingdom if you are an EEA national and: You are working in the
          United Kingdom; or You do...Read more
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5>UK Permanent Residence and UK Citizenship</h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          In this section you'll find tips and advice on various aspects of UK
          immigration, including Indefinite Leave to Remain (permanent
          residence), and UK Citizenship and Naturalisation. Contents: UK
          Permanent Residence/Indefinite Leave to Remain Citizenship and
          Naturalisation in UK Children Born Outside The UK Right of Abode (UK)
          Long Residence in UKRead more UK Permanent Residence/Indefinite Leave
          to Remain Citizenship and Naturalisation in UK Long Residence in UK
        </p>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);

export default MyAccordion;
