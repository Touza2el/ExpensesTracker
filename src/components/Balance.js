import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-component">
      <h4>your balance</h4>
      <h4 id="balance">${total}</h4>
    </div>
  );
};

export default Balance;
