// src/App.js
import React, { useState, useEffect } from "react";
import * as taskApi from "./api/taskApi";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await taskApi.getTasks();
    setTasks(response.data);
  };

  const handleAddTask = async (taskData) => {
    if (taskToEdit) {
      await taskApi.updateTask(taskToEdit._id, taskData);
      setTaskToEdit(null);
    } else {
      await taskApi.createTask(taskData);
    }
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await taskApi.deleteTask(id);
    fetchTasks();
  };

  const handleToggleTaskStatus = async (id) => {
    await taskApi.toggleTaskStatus(id);
    fetchTasks();
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskForm onSubmit={handleAddTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleStatus={handleToggleTaskStatus}
        onEdit={handleEditTask}
      />
    </div>
  );
}

export default App;
