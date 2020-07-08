import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="income-expenses-component">
      <div className="income inc-exp">
        <h6>income</h6>
        <p className="money plus">{income}</p>
      </div>
      <div className="expenses inc-exp">
        <h6>expenses</h6>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
