// src/api/taskApi.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks"; // Địa chỉ backend của bạn

export const getTasks = () => axios.get(API_URL);
export const createTask = (taskData) => axios.post(API_URL, taskData);
export const updateTask = (id, taskData) => axios.put(`${API_URL}/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const toggleTaskStatus = (id) => axios.patch(`${API_URL}/${id}/toggle`);
