import React from "react";
import "./styles/personal.css";
export default function Personal({ personalInfo, onChange }) {
  return (
    <div className="personal-container">
      <h1>Personal Information</h1>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={(e) => onChange(e)}
        value={personalInfo.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={(e) => onChange(e)}
        value={personalInfo.lastName}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => onChange(e)}
        value={personalInfo.title}
      />
      <label htmlFor="">
        Photo:
        <input
          style={{ marginLeft: "1rem" }}
          type="file"
          placeholder="Photo"
          name="photo"
          onChange={(e) => onChange(e)}
          // value={personalInfo.photo}
        />
      </label>
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={(e) => onChange(e)}
        value={personalInfo.address}
      />
      <input
        type="text"
        placeholder="Phone number"
        name="phoneNumber"
        onChange={(e) => onChange(e)}
        value={personalInfo.phoneNumber}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={(e) => onChange(e)}
        value={personalInfo.email}
      />
      <textarea
        name="description"
        placeholder="Description"
        id="descriptionTextArea"
        cols="30"
        rows="5"
        onChange={(e) => onChange(e)}
        value={personalInfo.description}
      ></textarea>
    </div>
  );
}
