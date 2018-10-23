import React, { Component } from "react";
import Link from "next/link";
import flags from "./Flags";
import "./RightSection.scss";

export default class RightSection extends Component {
  state = {};
  render() {
    return (
      <div className="rightSection">
        <div className="content">
          <p>Get a Job in</p>
          <div className="imageHolder">
            {flags.map(({ image, href }) => (
              <Link href={href}>
                <a>
                  <img src={`/static/country/${image}`} alt="" srcset="" />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="content">
          <p>School in</p>
          <div className="imageHolder">
            {flags.map(({ image, href }) => (
              <Link href={href}>
                <a>
                  <img src={`/static/country/${image}`} alt="" srcset="" />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="content">
          <p>Get Medical Services in</p>
          <div className="imageHolder">
            {flags.map(({ image, href }) => (
              <Link href={href}>
                <a>
                  <img src={`/static/country/${image}`} alt="" srcset="" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
