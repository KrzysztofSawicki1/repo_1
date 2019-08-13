import React, { Component } from "react";

import { Task } from "./models/task";
import { NewTaskForm } from "./components/NewTaskForm";
import { TasksList } from "./components/TasksList";

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: "",
      isDone: false
    },
    tasks: []
  };

  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} onDone={this.doneTask} />
      </div>
    );
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
  
  private doneTask = (doneTask: Task) => {
    this.setState(previousState => {
      let myTasks = Object.assign([], previousState.tasks);
      myTasks.find(task => task.id === doneTask.id).isDone = true;
      return {
        tasks: [
          ...myTasks
        ]
      };
    });
  }
}

export default App;