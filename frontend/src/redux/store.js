import {configureStore} from '@reduxjs/toolkit';
import ResumeReducer from './ResumeSlice';

export default configureStore({
    reducer: {
        resume: ResumeReducer
    },
})