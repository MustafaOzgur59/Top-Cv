import React from "react";

export default function PreviewFotoCard({ cv }) {
  return (
    <div className="PreviewFotoCard-container">
      <img src={cv.personalInfo.photo} alt="" />
    </div>
  );
}
