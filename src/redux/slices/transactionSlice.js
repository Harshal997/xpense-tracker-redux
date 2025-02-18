import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            console.log("payload in txnslice", action.payload)
            state.push(action.payload);
        },
        removeTransaction: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        emptyTransactionList: (state) => {
            state.length = 0;
        }
    }
});

export const { addTransaction, removeTransaction, emptyTransactionList } = transactionSlice.actions;
export default transactionSlice.reducer;
