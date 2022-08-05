import React from "react";

export default function PreviewFotoCard({ cv }) {
  return (
    <div className="PreviewFotoCard-container">
      <img src={cv.personalInfo.photo} alt="" />
      <h3>Personal Information</h3>
      <h4>Address</h4>
      <p>{cv.personalInfo.address}</p>

      <h4>Phone Number</h4>
      <p>{cv.personalInfo.phoneNumber}</p>

      <h4>Email</h4>
      <p> {cv.personalInfo.email}</p>
    </div>
  );
}
