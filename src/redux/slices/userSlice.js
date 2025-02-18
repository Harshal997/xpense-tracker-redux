import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  budget: 0,
  categories: {
    food: 0,
    travel: 0,
    entertainment: 0,
    others: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateTracker: (state, action) => {
      const { name, budget, categories } = action.payload;
      state.name = name;
      state.budget = budget;
      state.categories = categories;
    },
    resetTracker: (state) => {
        Object.assign(state, initialState);
    }
  },
});

export const { updateTracker, resetTracker } = userSlice.actions;
export default userSlice.reducer;
