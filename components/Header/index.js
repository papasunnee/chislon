import React, { Component } from "react";
import Link from "next/link";

export default class extends Component {
  constructor(props) {
    super(props);
    this.navControl = this.navControl.bind(this);
  }
  state = {
    toggleClass: false
  };
  navControl() {
    let control = this.state.toggleClass;
    this.setState({ toggleClass: !control });
  }
  render() {
    const toggleClass = "toggleClass";
    return (
      <div className="container navHolder">
        <nav>
          <div className="logo">
            <Link href="/">
              <a>
                <img
                  src="/static/whitelogo.png"
                  alt=""
                  className="img img-circle"
                />
              </a>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <div className="menu-control" onClick={this.navControl}>
              <span />
              <span />
              <span />
            </div>
            <ul
              className={`menu ${this.state.toggleClass ? "toggleClass" : ""}
              `}
            >
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/how-we-work">
                  <a>How We Work</a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a>Partners</a>
                </Link>
              </li>
              <li>
                <Link href="/latest-news">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <style jsx>
          {`
            .navHolder {
              padding-top: 40px;
            }
            .logo a img {
              width: 300px;
            }
            div.menu-control {
              cursor: pointer;
              width: 45px;
              padding: 5px;
              background-color: rgba(0, 0, 0, 0.3);
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            div.menu-control span {
              color: #fff;
              width: 25px;
              height: 3px;
              display: block;
              margin: 5px;
              background-color: #fff;
              transition: 0.5s;
            }

            nav {
              display: flex;
              justify-content: space-between;
            }
            nav ul.menu {
              margin: 0;
              padding: 0px;
              width: 150px;
              position: absolute;
              height: 0px;
              overflow: hidden;
              transition: 0.5s;
            }
            nav ul.toggleClass {
              height: auto;
              left: -105px;
              background-color: rgba(0, 0, 0, 0.3) !important;
              overflow: visible !important;
            }
            nav ul.menu li {
              list-style: none;
            }
            nav ul.menu li a {
              padding: 20px;
              margin: 0;
              display: block;
              line-height: 0px;
              color: #fff;
              transition: 0.5s;
            }
            nav ul.menu li a:hover {
              text-decoration: none;
              color: orange;
              background-color: rgba(0, 0, 0, 0.4) !important;
            }
          `}
        </style>
      </div>
    );
  }
}
