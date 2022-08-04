import React, { Component } from "react";
import "./styles/cvpreview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewMain from "./PreviewMain";

export default class CvPreview extends Component {
  render() {
    return (
      <div className="cvPreview-container">
        <PreviewHeader></PreviewHeader>
        <PreviewMain></PreviewMain>
      </div>
    );
  }
}
