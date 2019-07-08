import React, { Fragment, useState } from "react";
import { NavItem, NavLink } from "reactstrap";
import Link from "next/link";

import "./index.scss";

const Footerlinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" }
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <div className="footer">
        <nav className="footerNav">
          <h5>Quick Access ></h5>
          <ul className="footerMenu">
            <li>
              <Link href="/" prefetch>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/how-we-work" prefetch>
                <a>How We Work</a>
              </Link>
            </li>
            <li>
              <Link href="/partners" prefetch>
                <a>Partners</a>
              </Link>
            </li>
            <li>
              <Link href="/services" prefetch>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/latest-news" prefetch>
                <a>Latest News</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" prefetch>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs" prefetch>
                <a>FAQs</a>
              </Link>
            </li>
          </ul>
          <Socials />
        </nav>
      </div>
      <div className="copyright">
        {/* <p>
          Copyright 2019 <span>Chislon Broadway Visa Services</span> All Rights
          Reserved
        </p> */}
        {/* <ul>
            <li>
              <Link href="/privacy-policy">
                <a> Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer">
                <a> Disclaimer</a>
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy">
                <a> Cookie Policy</a>
              </Link>
            </li>
          </ul> */}
        <div className="cow">
          <p>
            Copyright 2019 <span>Chislon Broadway Visa Services</span> All
            Rights Reserved
          </p>
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
        <Link href="" prefetch>
          <a>
            <img src="/static/images/home/twitter.png" alt="" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="" prefetch>
          <a>
            <img src="/static/images/home/facebook.png" alt="" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="" prefetch>
          <a>
            <img src="/static/images/home/linkedin.png" alt="" />
          </a>
        </Link>
      </li>
    </ul>
  );
};
