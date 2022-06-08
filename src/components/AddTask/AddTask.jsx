import React,{ useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({add}) => {
  const [text ,setText] = useState("")
  const addTodo = (event) => {
      setText(event.target.value)
  }

  const handleClick = () => {
    add(text)
    setText("")
  }

  return (

    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={text} onChange={addTodo}/>
      <button data-testid="add-task-button" onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;