import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);
    // console.log(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnterAmount(event.target.value);
    // console.log(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
    // console.log(event.target.value);
  }

  // function inputChangeHandler(identifier, value) {
  //     if (identifier === 'title') {
  //         setEnterTitle(value);
  //     } else if (identifier === 'date') {
  //         setEnterDate(value);
  //     } else {
  //         setEnterAmount(value);
  //     }
  // }
  // this function can called like this => onChange={(event) => inputChangeHandler('title', event.target.value)}

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
