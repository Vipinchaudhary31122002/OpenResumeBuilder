import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialresume: {
    personal: {
      fullname: "",
      headline: "",
      email: "",
      phonenumber: "",
      address: "",
      website: "",
      summary: "",
      skills: [],
      spokenlanguages: [],
      hobbies: [],
    },
    links: [],
    workexperiences: [],
    educations: [],
    projects: [],
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
    SetSkills: (state, action) => {
      state.initialresume.personal.skills.push(action.payload);
    },
    SetSpokenLanguages: (state, action) => {
      state.initialresume.personal.spokenlanguages.push(action.payload);
    },
    SetHobbies: (state, action) => {
      state.initialresume.personal.hobbies.push(action.payload);
    },
    SetProjectDetails: (state, action) => {
      state.initialresume.projects.push({ ...action.payload });
    },
    SetWorkExperienceDetails: (state, action) => {
      state.initialresume.workexperiences.push({ ...action.payload });
    },
    SetEducationDetails: (state, action) => {
      state.initialresume.educations.push({ ...action.payload });
    },
    SetLinksDetails: (state, action) => {
      state.initialresume.links.push({ ...action.payload });
    },
  },
});
export const {
  SetPersonalDetails,
  SetSkills,
  SetProjectDetails,
  SetEducationDetails,
  SetWorkExperienceDetails,
  SetLinksDetails,
  SetSpokenLanguages,
  SetHobbies
} = ResumeSlice.actions;

export default ResumeSlice.reducer;

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
