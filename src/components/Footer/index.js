import React, { Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";
import Link from "next/link";
import { flags } from "../Countries/index";

import "./index.scss";

const Footerlinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const Index = () => {
  return (
    <Fragment>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-3 footer_links">
            <p className="heading">Empowering Global Citizenship</p>
            <div className="become">
              <h6>BECOME A CERTIFIED PARTNER</h6>
              <p>Discover the advantage of working with ChislonBroadway</p>
            </div>
            <div className="become">
              <h6>BECOME A GLOBAL CITIZEN</h6>
              <p>Discover the benefits for generations to come</p>
            </div>
          </div>
          <div className="col-md-3 footer_links d-flex">
            <div className="" style={{ marginRight: "14px" }}>
              <h6>GLOBAL CITIZEN</h6>
              <ul>
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Residence by Investment</a>
                </li>
                <li>
                  <a href="">Citizenship by Investment</a>
                </li>
                <li>
                  <a href="">High Net Worth Investors</a>
                </li>
                <li>
                  <a href="">Certified Paartners</a>
                </li>
                <li>
                  <a href="">Governemnt Agencies</a>
                </li>
                <li>
                  <a href="">Guide to our Dual Citizenship</a>
                </li>
              </ul>
            </div>
            <div>
              <h6>PROGRAMS</h6>
              <ul>
                {flags.map((flag, index) => (
                  <li>
                    <a href={flag.href}>{flag.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 footer_links">
            <h6>Stay Up To Date</h6>
            <ul>
              <li>
                <a href="">Industry News</a>
              </li>
              <li>
                <a href="">Industry Digest</a>
              </li>
              <li>
                <a href="">ChislonBroadway in the News</a>
              </li>
              <li>
                <a href="">Publications</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">Global Citizen Magazine</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer_links">
            <h6>Contact Us</h6>
            <ul>
              <li>
                <a href="">Global Office Locations</a>
              </li>
              <li>
                <a href="">Become a Global Citizen</a>
              </li>
              <li>
                <a href="">Become a Certified Partner</a>
              </li>
              <li>
                <a href="">Government Enquiries</a>
              </li>
              <li>
                <a href="">Media Enquiries</a>
              </li>
            </ul>

            <div className="social_links">
              <h6>FOLLOW US</h6>
              <ul className="d-flex">
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="top low_opacity">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="" className="bottom">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrightBar">
        <p>
          Copyright 2020 <span>Chislon Broadway Visa Services</span> All Rights
          Reserved
        </p>
        <div className="d-flex">
          {Footerlinks.map(({ href, label }, index) => {
            return (
              <div className="copyright-links" key={index}>
                <NavItem>
                  <Link href={href} passHref>
                    <NavLink className="copyright-link">{label}</NavLink>
                  </Link>
                </NavItem>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Index;

const Socials = () => {
  return (
    <ul className="footerSocials">
      <li>
        <Link href="//twitter.com/BroadwayChislon">
          <i className="fa fa-twitter" />
        </Link>
      </li>
      <li>
        <Link
          href="
//www.facebook.com/Chislon-broadway-417594015502295/?modal=admin_todo_tour
"
        >
          <i className="fa fa-facebook" />
        </Link>
      </li>
      <li>
        <Link href="//www.linkedin.com/company/chislon-broadway/?viewAsMember=true">
          <i className="fa fa-linkedin" />
        </Link>
      </li>
    </ul>
  );
};
