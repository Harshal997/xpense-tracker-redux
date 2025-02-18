import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    all: 0,
    food: 0,
    travel: 0,
    entertainment: 0,
    others: 0
};

export const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const { category, amount } = action.payload;
            if (state[category] !== undefined) {
                state[category] += amount;
            }

            state.all += amount;
        },
        resetExpense: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const { addExpense, resetExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
