import React from "react";

export default function PreviewHeader({ cv }) {
  return (
    <div className="preview-header-container">
      <h1>{cv.personalInfo.firstName + " " + cv.personalInfo.lastName}</h1>
      <p>{cv.personalInfo.title}</p>
    </div>
  );
}
