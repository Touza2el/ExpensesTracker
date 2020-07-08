import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const context = useContext(GlobalContext);
  const { addTransaction } = context;

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className="add-transaction-component">
      <form onSubmit={handleSubmit}>
        <div className="add-transaction-form">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text ..."
          />
        </div>
        <div className="add-transaction-form">
          <label htmlFor="amunt">
            Amount (negative - expenses, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount ... "
          />
        </div>
        <div className="add-transaction-btn">
          <button>Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
