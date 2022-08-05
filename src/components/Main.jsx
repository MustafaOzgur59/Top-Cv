import React from "react";
import CvForm from "./Cv/CvForm/CvForm";
import CvPreview from "./Cv/CvPreview/CvPreview";
import "./main.css";
import emptyCv from "./HelperFuncs/EmptyCv";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";
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

  const handleExperienceChange = (event, id) => {
    const { name, value } = event.target;

    setCv((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.map((experience) => {
          if (experience.id === id) {
            return { ...experience, [name]: value };
          } else {
            return experience;
          }
        }),
      };
    });
    console.log(cv.experiences);
  };
  const handleExperienceAddition = (event) => {
    setCv((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };
  const handleExperienceDelete = (event, id) => {
    setCv((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.filter((experience) => {
          return experience.id !== id;
        }),
      };
    });
  };

  const handleEducationChange = (event, id) => {
    const { name, value } = event.target;

    setCv((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.map((education) => {
          if (education.id === id) {
            return { ...education, [name]: value };
          } else {
            return education;
          }
        }),
      };
    });
    console.log(cv.educations);
  };

  const handleEducationAddition = (event) => {
    setCv((prevState) => {
      return {
        ...prevState,
        educations: [
          ...prevState.educations,
          {
            id: uuidv4(),
            universityName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
          },
        ],
      };
    });
  };

  const handleEducationDelete = (event, id) => {
    setCv((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.filter((education) => {
          return education.id !== id;
        }),
      };
    });
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleReset = () => {
    setCv(emptyCv);
  };

  return (
    <div className="main">
      <CvForm
        cv={cv}
        onChangePersonal={handlePersonalChange}
        onChangeEducation={handleEducationChange}
        onAddEducation={handleEducationAddition}
        onDeleteEducation={handleEducationDelete}
        onChangeExperience={handleExperienceChange}
        onAddExperience={handleExperienceAddition}
        onDeleteExperience={handleExperienceDelete}
        handlePrint={handlePrint}
        handleReset={handleReset}
      />
      <CvPreview cv={cv} ref={componentRef}></CvPreview>
    </div>
  );
}
