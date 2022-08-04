import React from "react";

export default function PreviewFotoCard({ cv }) {
  return (
    <div className="PreviewFotoCard-container">
      <img src={cv.photo} alt="" />
    </div>
  );
}
