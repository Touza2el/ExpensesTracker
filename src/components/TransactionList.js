import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  return (
    <div className="transaction-list-component">
      <h4>history</h4>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
