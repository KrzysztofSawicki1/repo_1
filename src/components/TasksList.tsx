import React, { FunctionComponent } from "react";

import { Task } from "../models/task";
import { TaskListItem } from "./TasksListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
  onDone: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete, onDone }) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} onDone={onDone}/>
    ))}
  </ul>
);
