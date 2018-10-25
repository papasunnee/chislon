import React, { Component, Fragment } from "react";
import "./MyCarousel.scss";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div
          className="container-fluid"
          style={{padding: "0" }}
        >
          <div className="carousel">
            <input type="radio" id="carousel-1" name="carousel[]" checked />
            <input type="radio" id="carousel-2" name="carousel[]" />
            <input type="radio" id="carousel-3" name="carousel[]" />
            <input type="radio" id="carousel-4" name="carousel[]" />
            <input type="radio" id="carousel-5" name="carousel[]" />
            <ul className="carousel__items">
              <li className="carousel__item">
                <img src="/static/1.jpg" alt="" />
              </li>
              <li className="carousel__item">
                <img src="/static/2.jpg" alt="" />
              </li>
              <li className="carousel__item">
                <img src="/static/3.jpg" alt="" />
              </li>
              <li className="carousel__item">
                <img src="/static/4.jpg" alt="" />
              </li>
            </ul>
            <div className="carousel__prev">
              <label for="carousel-1" />
              <label for="carousel-2" />
              <label for="carousel-3" />
              <label for="carousel-4" />
            </div>
            <div className="carousel__next">
              <label for="carousel-1" />
              <label for="carousel-2" />
              <label for="carousel-3" />
              <label for="carousel-4" />
            </div>
            <div className="carousel__nav">
              <label for="carousel-1" />
              <label for="carousel-2" />
              <label for="carousel-3" />
              <label for="carousel-4" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MyCarousel;
