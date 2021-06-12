import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import { Loading, encode } from "../../util";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./reactPhoneInput.scss";
// import Recaptcha from "react-google-invisible-recaptcha";
import "./CertifiedPartnerForm.scss";

const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  nationality: "",
  company_sector: "agricultire",
  company_highestQualification: "post_graduate",
  countries: [],
};
const JobSeekerForm = () => {
  const captchaEl = useRef(null);
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const getCountries = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setForm((prevValues) => ({
      ...prevValues,
      countries: [...result.data],
    }));
  };
  useEffect(() => {
    getCountries();
  }, []);

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

  const handlePhoneChange = ({ phone }) => {
    setForm((prevValues) => ({
      ...prevValues,
      phone: phone,
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
                    FIRSTNAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    value={form.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    LASTNAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={form.lastname}
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
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    PHONE <span className="text-danger">*</span>
                  </label>
                  <PhoneInput
                    style={{ width: "100% !important" }}
                    country="ng"
                    value={form.phone}
                    onChange={(phone) => handlePhoneChange({ phone })}
                    className="form-control"
                  />
                  {/* <input
                    type="number"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={form.phone}
                    className="form-control"
                  /> */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    COUNTRY WHERE JOB IS REQUIRED
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="nationality"
                    id="nationality"
                    value={form.nationality}
                    onChange={handleChange}
                    className="form-control"
                  >
                    {form.countries.map((country, index) => {
                      return (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
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
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">HIGHEST QUALIFICATION</label>
                  <select
                    name="highestQualification"
                    id="highestQualification"
                    value={form.company_highestQualification}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="post_graduate">Post Graduate</option>
                    <option value="first_degree">First Degree</option>
                    <option value="diploma">Diploma</option>
                  </select>
                </div>
              </Col>

              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">UPLOAD CV/RESUME</label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    className="form-control"
                    required
                  />
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
                  SUBMIT {btnState && <Loading />}
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
            padding: 10px 30px;
          }
          .submitButton:hover {
            background-color: #e2e2e2;
          }
        `}
      </style>
    </Container>
  );
};

export default JobSeekerForm;

export const TextTop = ({ title }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h4 className="mt-4">{title}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            molestias non libero, iusto aliquam ratione nesciunt perferendis
            nisi obcaecati tempore. Expedita itaque eaque enim earum est, ipsam
            vero quis ut. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus molestias non libero, iusto aliquam ratione nesciunt
            perferendis nisi obcaecati tempore. Expedita itaque eaque enim earum
            est, ipsam vero quis ut. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Natus molestias non libero, iusto aliquam ratione
            nesciunt perferendis nisi obcaecati tempore. Expedita itaque eaque
            enim earum est, ipsam vero quis ut. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus molestias non libero, iusto
            aliquam ratione nesciunt perferendis nisi obcaecati tempore.
            Expedita itaque eaque enim earum est, ipsam vero quis ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
