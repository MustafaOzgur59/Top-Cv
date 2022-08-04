import React, { Component } from "react";
import CvForm from "./Cv/CvForm/CvForm";
import CvPreview from "./Cv/CvPreview/CvPreview";
import "./main.css";
import emptyCv from "./HelperFuncs/EmptyCv";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: emptyCv,
    };
  }

  render() {
    console.log(this.state.cv);
    return (
      <div className="main">
        <CvForm cv={this.state.cv} />
        <CvPreview></CvPreview>
      </div>
    );
  }
}
