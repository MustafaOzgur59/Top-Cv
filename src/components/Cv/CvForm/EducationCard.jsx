import React from "react";

export default function EducationCard({ id, onChange, onDelete }) {
  return (
    <div className="education-card-container">
      <input type="text" placeholder="University Name" name="universityName" />
      <input type="text" placeholder="City" name="city" />
      <input type="text" placeholder="Degree" name="degree" />
      <input type="text" placeholder="Subject" name="subject" />
      <input type="date" placeholder="From" name="from" />
      <input type="date" placeholder="To" name="to" />
      <button onClick={(e) => onDelete(e, id)}>Delete</button>
    </div>
  );
}
