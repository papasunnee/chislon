import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import { Loading, encode } from "../../util";
// import Recaptcha from "react-google-invisible-recaptcha";
import "./CertifiedPartnerForm.scss";

const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const initialValues = {
  company_name: "",
  company_fullname: "",
  company_email: "",
  company_phone: "",
  company_website: "",
  company_sector: "",
};
const EmployerForm = () => {
  const captchaEl = useRef(null);
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const handleSubmit = (event) => {
    setBtnState(true);
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...form,
      }),
    })
      .then(() => {
        setBtnState(false);
        setForm(initialValues);
        setAlertState(true);
      })
      .catch((error) => {
        alert("Please, try submitting your data again");
        setBtnState(false);
        // setForm(initialValues);
        console.log(error);
      });
  };
  const onSubmit = () => {
    if ("" == form.value) {
      alert("Validation failed! Input cannot be empty.");
      recaptcha.reset();
    } else {
      recaptcha.execute();
    }
  };
  const onResolved = () => {
    alert("Recaptcha resolved with response: " + recaptcha.getResponse());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Container className="mb-5 certifiedPartnerForm">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <form
            className="mt-5"
            name="join_us"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <SweetAlert
              show={alertState}
              title="Join Chislon Broadway"
              text="Your Message Has been Successfully Submitted"
              onConfirm={() => setAlertState(false)}
            />
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="" className="">
                    COMPANY NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    className="form-control"
                    value={form.company_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    CONTACT PERSON FULLNAME{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="company_fullname"
                    id="company_fullname"
                    value={form.company_fullname}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    COMPANY EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="company_email"
                    id="company_email"
                    onChange={handleChange}
                    value={form.company_email}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    COMPANY PHONE <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name="company_phone"
                    id="company_phone"
                    onChange={handleChange}
                    value={form.company_phone}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">COMPANY WEBSITE</label>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    value={form.company_website}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">SECTOR</label>
                  <select
                    name="company_sector"
                    id="company_sector"
                    value={form.company_sector}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="agriculture">Agriculture</option>
                    <option value="engineering">Engineering</option>
                    <option value="ICT">ICT</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="telecommunication">Telecommunication</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={12}>
                {/* <Recaptcha
                  ref={captchaEl}
                  sitekey="6Le0zPAZAAAAAMZdhOAPB3SJFtAa_EpOlPShHgr4"
                  onResolved={() => console.log("Human detected.")}
                /> */}
                <button
                  type="submit"
                  className="btn submitButton"
                  disabled={btnState}
                >
                  Send Message {btnState && <Loading />}
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <style jsx>
        {`
          .submitButton {
            border: 1px solid #f2f2f2;
            padding: 12px 16px;
          }
          .submitButton:hover {
            background-color: #e2e2e2;
          }
        `}
      </style>
    </Container>
  );
};

export default EmployerForm;
