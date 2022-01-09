import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTransactions = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            placeholder="Enter text...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter text...."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn" type="submit">
            Add transaction
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTransactions;
