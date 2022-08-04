import React, { Component } from "react";

export default class EducationCard extends Component {
  render() {
    return (
      <div className="education-container">
        <input type="text" placeholder="University Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="date" placeholder="From" />
        <input type="date" placeholder="To" />
      </div>
    );
  }
}
