import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "./empty.jpg";
const emptyCv = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experiences: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  educations: [
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

export default emptyCv;
