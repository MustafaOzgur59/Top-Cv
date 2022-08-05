// import React from "react";
import "./styles/cvpreview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewMain from "./PreviewMain";

// export default function CvPreview({ cv }) {
//   return (
//     <div className="cvPreview-container">
//       <PreviewHeader cv={cv}></PreviewHeader>
//       <PreviewMain cv={cv}></PreviewMain>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class CvPreview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div className="cvPreview-container">
        <PreviewHeader cv={cv}></PreviewHeader>
        <PreviewMain cv={cv}></PreviewMain>
      </div>
    );
  }
}
