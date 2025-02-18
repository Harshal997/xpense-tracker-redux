import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from '../../redux/slices/transactionSlice';
import { updateTracker } from '../../redux/slices/userSlice';
import { addExpense } from '../../redux/slices/expenseSlice';

const TransactionList = () => {
    const allTransactions = useSelector((state) => state.transactions)
    const dispatch = useDispatch();
    const headings = ["Sr. No", "Transaction", "Category", "Amount", "Action"];
    const transactionList = [
        { id: 1, transaction: "Movie", category: "others", amount: 2000 },
        { id: 2, transaction: "Dinner", category: "food", amount: 120 },
        { id: 3, transaction: "Travel", category: "travel", amount: 100 }
    ];

    const handleDeleteTransaction = (transaction) => {
        dispatch(addExpense({category: transaction.category, amount: -transaction.amount}));
        dispatch(removeTransaction(transaction.id));
    }

    useEffect(() => {
        console.log("transactions list", allTransactions);
    },[allTransactions])

    return (
        <div style={{display: 'flex', marginTop: 100}}>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "60%" }}>
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allTransactions.map((transaction, index) => (
                        <tr key={transaction.id}>
                            <td>{index + 1}</td>
                            <td>{transaction.name}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td><button onClick={() => handleDeleteTransaction(transaction)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
