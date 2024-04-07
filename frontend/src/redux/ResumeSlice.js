import { createSlice, nanoid } from "@reduxjs/toolkit";

import { deleteObjectById } from "./ReducerFunctions";

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

const Skills = {
  SetSkillDetails: (state, action) => {
    state.initialresume.personal.skills.push({
      id: nanoid(),
      skills: action.payload,
    });
  },
  DeleteSkillDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const spokenlanguages = {
  SetSpokenLanguageDetails: (state, action) => {
    state.initialresume.personal.spokenlanguages.push({
      id: nanoid(),
      spokenlanguage: action.payload,
    });
  },
  DeleteSpokenLanguageDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const Hobbies = {
  SetHobbyDetails: (state, action) => {
    state.initialresume.personal.hobbies.push({
      id: nanoid(),
      hobby: action.payload,
    });
  },
  DeleteHobbyDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const WorkExperiences = {
  SetWorkExperienceDetails: (state, action) => {
    state.initialresume.workexperiences.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteWorkExperienceDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const Educations = {
  SetEducationDetails: (state, action) => {
    state.initialresume.educations.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteEducationDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const Projects = {
  SetProjectDetails: (state, action) => {
    state.initialresume.projects.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteProjectDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const Links = {
  SetLinkDetails: (state, action) => {
    state.initialresume.links.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteLinkDetails: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

export const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    ...Skills,
    ...Hobbies,
    ...spokenlanguages,
    ...WorkExperiences,
    ...Links,
    ...Projects,
    ...Educations,
  },
});

export const {
  // Set data actions
  SetSkillDetails,
  SetProjectDetails,
  SetEducationDetails,
  SetWorkExperienceDetails,
  SetLinkDetails,
  SetSpokenLanguageDetails,
  SetHobbyDetails,
  // Delete data actions
  DeleteProjectDetails,
  DeleteLinkDetails,
  DeleteEducationDetails,
  DeleteWorkExperienceDetails,
  DeleteSkillDetails,
  DeleteSpokenLanguageDetails,
  DeleteHobbyDetails,
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
