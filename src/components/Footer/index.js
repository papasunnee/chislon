import React, { Fragment } from "react";
import Link from "next/link";

import "./index.scss";

const Index = () => {
  return (
    <Fragment>
      <div className="footer">
        <nav className="footerNav">
          <h5>Quick Access ></h5>
          <ul className="footerMenu">
            <li>
              <Link href="" prefetch>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>How We Work</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>Partners</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>Latest News</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="" prefetch>
                <a>FAQs</a>
              </Link>
            </li>
          </ul>
          <Socials />
        </nav>
      </div>
      <div className="copyright">
        <p>
          Copyright 2019 <span>Chislon Broadway Visa Services</span> All Rights
          Reserved
          <ul>
            <li>
              <Link href="">
                <a> Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Disclaimer</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Cookie Policy</a>
              </Link>
            </li>
          </ul>
        </p>
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
