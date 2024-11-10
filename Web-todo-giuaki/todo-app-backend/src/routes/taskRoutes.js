// routes/taskRoutes.js
const express = require("express");
const { getTasks, createTask, updateTask, deleteTask, toggleTaskStatus } = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id/toggle", toggleTaskStatus);

module.exports = router;
