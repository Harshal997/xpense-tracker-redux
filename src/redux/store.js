import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { transactionSlice } from "./slices/transactionSlice";
import { expenseSlice } from "./slices/expenseSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        expense: expenseSlice.reducer,
        transactions: transactionSlice.reducer
    }
});