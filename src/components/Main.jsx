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
    console.log(cv);
    console.log(type);
    if (type === "file") {
      onChangePersonalPicture(event);
      console.log("shiiiert");
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const onChangePersonalPicture = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="main">
      <CvForm cv={cv} onChangePersonal={handlePersonalChange} />
      <CvPreview cv={cv}></CvPreview>
    </div>
  );
}
