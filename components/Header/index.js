import React, { Component } from "react";

export default () => (
  <div className="container navHolder">
    <nav>
      <div className="logo">
        <a href="">
          <img src="/static/whitelogo.png" alt="" className="img img-circle" />
        </a>
      </div>
      <div>menu</div>
    </nav>
    <style jsx>
      {`
        .navHolder {
          line-height: 80px;
        }
        .logo a img {
          width: 300px;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    </style>
  </div>
);
