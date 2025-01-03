// controllers/userController.js
const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().populate("tasks");
  res.json(users);
};

exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
};
