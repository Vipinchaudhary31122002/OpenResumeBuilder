import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialresume: {
    fullname: "",
    headline: "",
    email: "",
    phonenumber: "",
    address: "",
    website: "",
    summary: "",
    links: [{ network: "", username: "", website: "" }],
    experience: [
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
    skills: [],
    languages: [],
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
    intersets: [],
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
    publication: [
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
