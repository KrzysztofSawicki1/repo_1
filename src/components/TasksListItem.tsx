import React, { FunctionComponent } from "react";

import { Task } from "../models/task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
  onDone: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete, onDone }) => {
  const onClick = () => {
    onDelete(task);
  };

  const onDoneClick = () => {
    console.log('TasksListItem onDoneClick');
    onDone(task);
  }

  return (
    <li>
      <span className={ `${task.isDone ? "done" : ""}`} onClick={onDoneClick.bind(this)}> {task.name}</span>
      <button onClick={onClick}>X</button>
    </li>
  );
};
