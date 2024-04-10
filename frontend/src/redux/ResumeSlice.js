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
  UpdatePersonal: (state, action) => {
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
  CreateSkill: (state, action) => {
    state.initialresume.personal.skills.push({
      id: nanoid(),
      skills: action.payload,
    });
  },
  DeleteSkill: (state, action) => {
    state.initialresume.personal.skills = deleteObjectById(
      state.initialresume.personal.skills,
      action.payload
    );
  },
};

const spokenlanguages = {
  CreateSpokenLanguage: (state, action) => {
    state.initialresume.personal.spokenlanguages.push({
      id: nanoid(),
      spokenlanguage: action.payload,
    });
  },
  DeleteSpokenLanguage: (state, action) => {
    state.initialresume.personal.spokenlanguages = deleteObjectById(
      state.initialresume.personal.spokenlanguages,
      action.payload
    );
  },
};

const Hobbies = {
  CreateHobby: (state, action) => {
    state.initialresume.personal.hobbies.push({
      id: nanoid(),
      hobby: action.payload,
    });
  },
  DeleteHobby: (state, action) => {
    state.initialresume.personal.hobbies = deleteObjectById(
      state.initialresume.personal.hobbies,
      action.payload
    );
  },
};

const WorkExperiences = {
  CreateWorkExperience: (state, action) => {
    state.initialresume.workexperiences.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteWorkExperience: (state, action) => {
    state.initialresume.workexperiences = deleteObjectById(
      state.initialresume.workexperiences,
      action.payload
    );
  },
};

const Educations = {
  CreateEducation: (state, action) => {
    state.initialresume.educations.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteEducation: (state, action) => {
    state.initialresume.educations = deleteObjectById(
      state.initialresume.educations,
      action.payload
    );
  },
};

const Projects = {
  CreateProject: (state, action) => {
    state.initialresume.projects.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteProject: (state, action) => {
    state.initialresume.projects = deleteObjectById(
      state.initialresume.projects,
      action.payload
    );
  },
};

const Links = {
  CreateLink: (state, action) => {
    state.initialresume.links.push({
      id: nanoid(),
      ...action.payload,
    });
  },
  DeleteLink: (state, action) => {
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
  // Update data actions
  UpdatePersonal,
  // Create data actions
  CreateSkill,
  CreateProject,
  CreateEducation,
  CreateWorkExperience,
  CreateLink,
  CreateSpokenLanguage,
  CreateHobby,
  // Delete data actions
  DeleteProject,
  DeleteLink,
  DeleteEducation,
  DeleteWorkExperience,
  DeleteSkill,
  DeleteSpokenLanguage,
  DeleteHobby,
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
