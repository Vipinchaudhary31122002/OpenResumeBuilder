import { createSlice } from "@reduxjs/toolkit";

// const resumes = [];
const initialState = {
  fullname: "",
  email: "",
  phonenumber: "",
  address: "",
};

export const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    SetFullname: (state, action) => {
      state.fullname = action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
    SetPhonenumber: (state, action) => {
      state.phonenumber = action.payload;
    },
    SetAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});
export const { SetFullname, SetEmail, SetPhonenumber, SetAddress } = ResumeSlice.actions;

export default ResumeSlice.reducer;
