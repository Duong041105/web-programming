// src/components/TaskForm.js
import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập tên task"
        required
      />
      <button type="submit">{taskToEdit ? "Cập nhật Task" : "Thêm Task"}</button>
    </form>
  );
};

export default TaskForm;
