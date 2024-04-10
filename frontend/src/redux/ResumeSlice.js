import { createSlice, nanoid } from "@reduxjs/toolkit";

import { deleteObjectById } from "./ResumeSliceFunctions";

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
  SelectedDispalyInfoID: {
    SelectedLinkID: "",
    SelectedEducationID: "",
    SelectedProjectID: "",
    SelectedWorkExperienceID: "",
  },
};

const Personal = {
  UpdatePersonalDetails: (state, action) => {
    const {
      fullname,
      headline,
      email,
      phonenumber,
      address,
      website,
      summary,
    } = action.payload;
    state.initialresume.personal = {
      ...state.initialresume.personal,
      ...(fullname && { fullname }),
      ...(headline && { headline }),
      ...(email && { email }),
      ...(phonenumber && { phonenumber }),
      ...(address && { address }),
      ...(website && { website }),
      ...(summary && { summary }),
    };
  },
};

const Skills = {
  SetSkillDetails: (state, action) => {
    state.initialresume.personal.skills.push({
      id: nanoid(),
      skills: action.payload,
    });
  },
  DeleteSkillDetails: (state, action) => {
    state.initialresume.personal.skills = deleteObjectById(
      state.initialresume.personal.skills,
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
    state.initialresume.personal.spokenlanguages = deleteObjectById(
      state.initialresume.personal.spokenlanguages,
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
    state.initialresume.personal.hobbies = deleteObjectById(
      state.initialresume.personal.hobbies,
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
    state.initialresume.workexperiences = deleteObjectById(
      state.initialresume.workexperiences,
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
    state.initialresume.educations = deleteObjectById(
      state.initialresume.educations,
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
    state.initialresume.links = deleteObjectById(
      state.initialresume.links,
      action.payload
    );
  },
};

export const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    ...Personal,
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
  UpdatePersonalDetails,
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
