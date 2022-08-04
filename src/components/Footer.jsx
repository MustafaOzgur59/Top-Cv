import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <a
          href="https://github.com/MustafaOzgur59?tab=repositories"
          target="blank"
        >
          <p>MustafaOzgur59</p>
        </a>

        <a
          href="https://github.com/MustafaOzgur59?tab=repositories"
          target="blank"
        >
          <FaGithub />
        </a>
      </div>
    );
  }
}
