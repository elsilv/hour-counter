import React, { useState, useContext } from "react";
import { GlobalContext2 } from "../context/GlobalState";
import { useParams } from "react-router-dom";

export const AddHours = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  // eslint-disable-next-line
  const [project, setProject] = useState("");
  const [error, setError] = useState("");

  const { addHours } = useContext(GlobalContext2);

  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const newHistory = {
        id: Math.floor(Math.random() * 100000),
        text: text,
        amount: +amount,
        project: id,
      };

      if ((text.length > 1) & (amount !== 0)) {
        addHours(newHistory);

        setText("");
        setAmount(0);
        setProject("");
      }
    } catch (error) {
      setError("Something is wrong with given values");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <h4>Add hours you have used</h4>
      {error && <span className="error-message"> {error} </span>}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">What did you do?</label>
          <input
            id="workingHour-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">How much time did you spend?</label>
          <input
            id="workingHour-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter hours..."
          />
        </div>
        <button id="addHour-btn" className="btn">
          Add hours
        </button>
      </form>
    </>
  );
};
