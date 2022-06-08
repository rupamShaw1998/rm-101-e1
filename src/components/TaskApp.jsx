import React,{ useState } from "react";
import styles from "./taskApp.module.css";
import { AddTask } from './AddTask';
import { TaskHeader } from "./TaskHeader";
import {v4} from 'uuid';
import {Tasks} from './Tasks';

const TaskApp = ({data}) => {

  const [tasks, setTasks] = useState(data);

  const add = (e) => {
      const taskobj = {
        id: v4(),
        text: e,
        done: true,
        count: 1,
      };
      setTasks([...tasks, taskobj]);
  };

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader tasks={tasks}/>
      <AddTask add={add}></AddTask>
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default TaskApp;