import React from "react";

export default function EducationCard({ id, onChange, onDelete }) {
  return (
    <div className="education-card-container">
      <input
        type="text"
        placeholder="University Name"
        name="universityName"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="date"
        placeholder="From"
        name="from"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <input
        type="date"
        placeholder="To"
        name="to"
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      <button onClick={(e) => onDelete(e, id)}>Delete</button>
    </div>
  );
}
