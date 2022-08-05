import React from "react";

export default function EducationCard({ education, id, onChange, onDelete }) {
  return (
    <div className="education-card-container">
      <input
        type="text"
        placeholder="University Name"
        name="universityName"
        value={education.universityName}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={education.city}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        value={education.degree}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={education.subject}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="date"
        placeholder="From"
        name="from"
        value={education.from}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="date"
        placeholder="To"
        name="to"
        value={education.to}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <button onClick={(e) => onDelete(e, id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}
