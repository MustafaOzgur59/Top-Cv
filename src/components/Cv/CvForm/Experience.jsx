import React, { Component } from "react";
import "./styles/experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience-container">
        <h1>Experience</h1>
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="City" />
        <input type="date" placeholder="From" />
        <input type="date" placeholder="To" />
      </div>
    );
  }
}
