import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count, handleCount }) => {

  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => handleCount(count+1)}
      >
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => handleCount(count-1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;