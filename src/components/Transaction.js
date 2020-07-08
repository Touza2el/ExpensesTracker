import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const context = useContext(GlobalContext);
  const { deleteTransaction } = context;

  const { transaction } = props;
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <div className="transaction-component">
      <li className={transaction.amount > 0 ? "green-border" : "red-border"}>
        <span>{transaction.text}</span>
        <span>
          {sign} ${Math.abs(transaction.amount)}
        </span>
        <button
          className="belete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
