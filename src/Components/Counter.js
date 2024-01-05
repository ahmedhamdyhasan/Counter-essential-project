import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      {" "}
      <h3>Counter Project</h3>
      <div
        className={
          count > 0
            ? "positive"
            : "negative" && count < 0
            ? "negative"
            : "display-counting"
        }
      >
        <h2>{count}</h2>
      </div>
      <div className="btns-container">
        <button className="btn increase" onClick={increase}>
          Increase
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
        <button className="btn decrease" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
