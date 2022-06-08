import React from "react";
import styles from "./tasks.module.css";
import data from '../../data/tasks.json'
import Task from '../Task/Task'

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <> 
      <ul data-testid="tasks" className={styles.tasks}>
        {data.map(e => {

          return (
            <li>{e.text } - <Task /></li>
          )
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>

      </div>
    </>
  );
};

export default Tasks;