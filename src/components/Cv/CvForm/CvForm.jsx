import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import "./styles/cvform.css";
export default class CvForm extends Component {
  render() {
    return (
      <div className="cv-form">
        <Personal></Personal>
        <Education></Education>
        <Experience></Experience>
      </div>
    );
  }
}
