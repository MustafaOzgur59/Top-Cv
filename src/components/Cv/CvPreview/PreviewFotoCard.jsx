import React from "react";

export default function PreviewFotoCard({ cv }) {
  return (
    <div className="PreviewFotoCard-container">
      <img src={cv.personalInfo.photo} alt="" />
      <h3>Personal Information</h3>
      <h4>Address</h4>
      {cv.personalInfo.address}
      <h4>Phone Number</h4>
      {cv.personalInfo.phoneNumber}
      <h4>Email</h4>
      {cv.personalInfo.email}
    </div>
  );
}
