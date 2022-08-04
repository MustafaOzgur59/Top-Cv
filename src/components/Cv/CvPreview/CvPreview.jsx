import React from "react";
import "./styles/cvpreview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewMain from "./PreviewMain";

export default function CvPreview({ cv }) {
  return (
    <div className="cvPreview-container">
      <PreviewHeader></PreviewHeader>
      <PreviewMain cv={cv}></PreviewMain>
    </div>
  );
}
