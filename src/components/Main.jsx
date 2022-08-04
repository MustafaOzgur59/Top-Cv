import React from "react";
import CvForm from "./Cv/CvForm/CvForm";
import CvPreview from "./Cv/CvPreview/CvPreview";
import "./main.css";
import emptyCv from "./HelperFuncs/EmptyCv";
import { useState } from "react";
export default function Main() {
  const [cv, setCv] = useState(emptyCv);

  const handlePersonalChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    const { name, value, type } = event.target;
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="main">
      <CvForm cv={cv} onChangePersonal={handlePersonalChange} />
      <CvPreview></CvPreview>
    </div>
  );
}
