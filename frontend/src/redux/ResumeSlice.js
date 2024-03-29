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
    links: [{ network: "", username: "", website: "" }],
    workexperience: [
      {
        campanyname: "",
        position: "",
        duration: "",
        address: "",
        website: "",
        summary: "",
      },
    ],
    education: [
      {
        universityname: "",
        degree: "",
        score: "",
        duration: "",
        website: "",
        summary: "",
      },
    ],
    awards: [{ title: "", date: "", summary: "", organization: "" }],
    certifications: [
      {
        name: "",
        description: "",
        duration: "",
        website: "",
        summary: "",
        keywords: [],
      },
    ],
    projects: [
      {
        name: "",
        description: "",
        duration: "",
        website: "",
        summary: "",
        keywords: [],
      },
    ],
    publications: [
      { name: "", publisher: "", data: "", website: "", summary: "" },
    ],
    volunteering: [
      {
        organization: "",
        position: "",
        duration: "",
        location: "",
        website: "",
        summary: "",
      },
    ],
    references: [{ name: "", description: "", website: "", summary: "" }],
  },
  resumes: [],
};

export const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    SetPersonalDetails: (state, action) => {
      state.initialresume = {...action.payload };
    },
  },
});
export const { SetPersonalDetails } = ResumeSlice.actions;

export default ResumeSlice.reducer;
