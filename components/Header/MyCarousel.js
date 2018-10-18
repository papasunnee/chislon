import React, { Component, Fragment } from "react";
import "./MyCarousel.scss";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div id="slider">
          <ul>
            <li>
              <div className="slider-container">
                <h2>NO ADVANCE CONSULTATION FEES</h2>
              </div>
            </li>
            <li>
              <div className="slider-container">
                <h2>MANDATORY INITIAL ASSESSMENT</h2>
              </div>
            </li>
            <li>
              <div className="slider-container">
                <h2>"MEMBERSHIP ONLY" SERVICES</h2>
              </div>
            </li>
            <li>
              <div className="slider-container">
                <h2>EXPERIENCE WORLD CLASS GLOBAL MOBILITY SERVICES</h2>
              </div>
            </li>
            <li>
              <div className="slider-container">
                <h2>99.99% SUCCESS RATE</h2>
              </div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default MyCarousel;
