import { createSlice } from '@reduxjs/toolkit'

export const ResumeSlice = createSlice({
  name: 'resume',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})
export const { increment, decrement, incrementByAmount } = ResumeSlice.actions

export default ResumeSlice.reducer