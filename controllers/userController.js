import { User } from "../models/user";
import { Op } from "sequelize";

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// get user
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "User not found", data: user });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: user,
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(404).json({ status: 404, message: error.message });
    } else if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(404)
        .json({ status: 404, message: "Duplicate entry for unique field" });
    } else {
      return res.status(400).json({ status: 400, message: error.message });
    }
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    // const user = await User.findOne({ where: { id } });
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "User not found", data: user });
    }
    await user.update(req.body);
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: user });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const user = await User.findByPk(id);
    if (!user) {
      res
        .status(404)
        .json({ status: 404, message: "User not found", data: user });
    }
    await user.destroy();
    res
      .status(200)
      .json({ status: 200, message: "User deleted successfully", data: user });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

//delete all user
const deleteUsers = async (req, res) => {
  try {
    await User.destroy({ where: {}, truncate: false });
    res
      .status(200)
      .json({ status: 200, message: "All user deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

export const getUserSearch = async (req, res) => {
  try {
    const id = req.query;
    const username = req.query;
    const age = req.query;
    const address = req.query;
    const user = await User.findAll({
      where: { [Op.and]: [id, age, username, address] },
    });
    // const user = await User.findAll({ where: username });
    if (user.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Not found",
        data: user,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
export { getUsers, createUser, updateUser, deleteUser, deleteUsers, getUser };
