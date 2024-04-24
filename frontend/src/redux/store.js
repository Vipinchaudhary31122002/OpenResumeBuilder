import { configureStore } from "@reduxjs/toolkit";
import ResumeReducer from "./ResumeSlice";
// import UserReducer from "./UserSlice";

export default configureStore({
  reducer: {
    resume: ResumeReducer,
    // user: UserReducer,
  },
});
