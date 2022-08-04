import React, { Component } from "react";
import "./styles/education.css";
import EducationCard from "./EducationCard";

export default class Education extends Component {
  render() {
    return (
      <div>
        <h1>Education</h1>
        {/* <input type="text" placeholder="University Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="date" placeholder="From" />
        <input type="date" placeholder="To" /> */}
        <EducationCard></EducationCard>
      </div>
    );
  }
}
