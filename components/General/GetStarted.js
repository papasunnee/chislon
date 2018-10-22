import React, { Component } from "react";
import Link from "next/link" ;
import "./GetStarted.scss";

export default class GetStarted extends Component {
  state = {};
  render() {
    return (
      <div className="getStarted">
        <Link href="/registration"><a>GET STARTED</a></Link>
      </div>
    );
  }
}
