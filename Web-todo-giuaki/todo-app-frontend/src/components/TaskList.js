// src/components/TaskList.js
import React from "react";

const TaskList = ({ tasks, onDelete, onToggleStatus, onEdit }) => {
  return (
    <div>
      <h2>Danh sách Task</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleStatus(task._id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
            <button onClick={() => onEdit(task)}>Sửa</button>
            <button onClick={() => onDelete(task._id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
