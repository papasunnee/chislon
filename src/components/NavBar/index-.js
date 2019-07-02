import React, { useState, useEffect } from "react";
import Link from "next/link";

const Index = props => {
  const [nav, setNav] = useState({ width: null });
  useEffect(() => {
    setNav({
      ...nav,
      width: document.body.clientWidth
    });
    window.addEventListener("resize", () => {
      setNav({
        ...nav,
        width: document.body.clientWidth
      });
      console.log("nav width", nav.width);
      // if (nav.width < 500) {
      //   let toggleButton = document.getElementById("navbar-toggler");
      //   toggleButton.addEventListener("click", () => {
      //     console.log("sunday", window.screen.availWidth);
      //   });
      // }
    });
  }, [nav.width]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link href="">
        <a className="navbar-brand">Chislon</a>
      </Link>
      {/* {nav.width < 500 && ( */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      // )}
      {/* {nav.width > 499 && ( */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Latest News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
      {/* )} */}
      <style jsx>{`
        a {
          color: ${props => props.theme.colors.white} !important;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};
export default Index;
