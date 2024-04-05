import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialresume: {
    personal: {
      fullname: "Jhon Doe",
      headline: "Software Developer",
      email: "JhoneDoe@gmail.com",
      phonenumber: "910005110",
      address: "Earth",
      website: "jhondoe.com",
      summary: "Hello i am a professional Software Developer.",
      skills: [
        "JavaScript",
        "React",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
      spokenlanguages: ["English", "Hindi"],
      hobbies: ["Scoccer", "Baseball", "Gym"],
    },
    links: [
      { network: "Github", username: "jhondoe", website: "jhondoe@github.com" },
      {
        network: "Linkedin",
        username: "jhondoe",
        website: "jhondoe@Linkedin.com",
      },
    ],
    workexperiences: [
      {
        campanyname: "Google",
        position: "SDE1",
        duration: "2 years",
        summary: "Hello i am a googler",
      },
    ],
    educations: [
      {
        universityname: "XYZ University",
        degree: "Bachelor in Computer Engineering",
        score: "9",
        duration: "2020",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl eros, commodo in ultricies a, interdum vitae ipsum. Cras eget arcu sit amet magna tristique cursus. Cras egestas nunc a ultrices pharetra. ",
      },
    ],
    projects: [
      {
        name: "Ultron",
        duration: "3 year",
        website: "Ultron.render.com",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl eros, commodo in ultricies a, interdum vitae ipsum. Cras eget arcu sit amet magna tristique cursus. Cras egestas nunc a ultrices pharetra. ",
      },
    ],
    // awards: [{ title: "", date: "", summary: "", organization: "" }],
    // certifications: [
    //   {
    //     name: "",
    //     description: "",
    //     duration: "",
    //     website: "",
    //     summary: "",
    //     keywords: [],
    //   },
    // ],
    // publications: [
    //   { name: "", publisher: "", data: "", website: "", summary: "" },
    // ],
    // volunteering: [
    //   {
    //     organization: "",
    //     position: "",
    //     duration: "",
    //     location: "",
    //     website: "",
    //     summary: "",
    //   },
    // ],
    // references: [{ name: "", description: "", website: "", summary: "" }],
  },
  resumes: [],
};

export const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // SetPersonalDetails: (state, action) => {
    //   state.initialresume.personal = { ...action.payload };
    // },
    // SetSkills: (state, action) => {
    //   console.log(action.payload);
    //   state.initialresume.personal.skills.push(...action.payload);
    // },
  },
});
export const { SetPersonalDetails, SetSkills } = ResumeSlice.actions;

export default ResumeSlice.reducer;
