import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/slices/expenseSlice";
import { addTransaction } from "../../redux/slices/transactionSlice";

const categories = ["all", "food", "travel", "entertainment", "others"];

const Expense = () => {
    const [expenseName, setExpenseName] = useState("");
    const [category, setCategory] = useState("all");
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const handleExpenseFormSubmit = (e) => {
        e.preventDefault();
        console.log("submitted expense form");
        console.log(expenseName, category, amount);
        dispatch(addExpense({category: category, amount: amount}));
        dispatch(addTransaction({id: Date.now(), name: expenseName, category: category, amount: amount}))
      };
  return (
    <div>
      <h2 className="title">New Expense Form</h2>
      <form
        action=""
        className="expsense-form1"
        onSubmit={handleExpenseFormSubmit}
      >
        <div className="expense-form-input">
          <label htmlFor="expense-name">Expense name: </label>
          <input required type="text" id="expense-name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
          <label htmlFor="expense-category">Select category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required name="" id="">
            {categories.map((category) => (
              <option value={category}>
                {category.slice(0, 1).toUpperCase()}
                {category.slice(1)}
              </option>
            ))}
          </select>
          <label htmlFor="expense-amount">Select amount: </label>
          <input required type="number" name="" id="expense-amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Expense;
