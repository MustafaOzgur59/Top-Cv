import React from "react";

export default function PreviewHeader({ cv }) {
  return (
    <div className="preview-header-container">
      <h1>{cv.personalInfo.firstName + " " + cv.personalInfo.lastName}</h1>
      <h2>{cv.personalInfo.title}</h2>
    </div>
  );
}
