import React, { Component } from "react";
import "./styles/personal.css";
export default class Personal extends Component {
  render() {
    return (
      <div className="personal-container">
        <h1>Personal Information</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Title" />
        <label htmlFor="">
          Photo:
          <input
            style={{ marginLeft: "1rem" }}
            type="file"
            placeholder="Photo"
          />
        </label>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="email" />
        <textarea
          name="about"
          placeholder="Description"
          id="descriptionTextArea"
          cols="30"
          rows="5"
        ></textarea>
      </div>
    );
  }
}
