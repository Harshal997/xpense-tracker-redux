import React from "react";
import { useSelector } from "react-redux";
import Expense from "../expense/Expense";
import TransactionList from "../transaction-list/TransactionList";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  const headings = ["Category", "Limit Status", "Budget", "Expense", "Balance"];
  const categories = ["all", "food", "travel", "entertainment", "others"];
  const userData = useSelector((state) => state.user);
  const expenseData = useSelector((state) => state.expense);
  const { budget } = userData;
  const { food, entertainment, travel } = userData.categories;
  const tableData = [
    ["All", budget, budget - expenseData.all >= 0 ? "within" : "exceed", expenseData.all, budget - expenseData.all],
    ["Food", food, food - expenseData.food >= 0 ? "within" : "exceed", expenseData.food, food - expenseData.food],
    ["Travel", travel, travel - expenseData.travel >= 0 ? "within" : "exceed", expenseData.travel, travel - expenseData.travel],
    ["Entertainment", entertainment, entertainment - expenseData.entertainment >= 0 ? "within" : "exceed", expenseData.entertainment, entertainment - expenseData.entertainment],
    ["Others", budget - (food + travel + entertainment), budget - (food + travel + entertainment) - expenseData.others >= 0 ? "within" : "exceed", expenseData.others, budget - (food + travel + entertainment) - expenseData.others],
  ];
  categories.map((category) => {});

  console.log("userdata", userData);
  console.log("expenseData", expenseData)
  return (
    <div>
      <div>
        <h3>{userData.name}'s Monthly Expenditure</h3>
        <button onClick={() => navigate("/")}>New/Update tracker</button>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        {userData.name && (
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <Expense />
      <TransactionList />
    </div>
  );
};

export default Transactions;
