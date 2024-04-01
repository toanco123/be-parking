import { Admin } from "../models/admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: admins,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res
        .status(404)
        .json({ status: 404, message: "Admin not found", data: admin });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// registerAdmin
const registerAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: admin,
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

const loginAdmin = async (req, res) => {
  const adminLogin = await Admin.findOne({
    where: { username: req.body.username },
  });
  if (!adminLogin) return res.status(400).send("Không tìm thấy admin");
  const passLogin = await bcrypt.compare(
    req.body.password,
    adminLogin.password
  );
  if (!passLogin) return res.status(400).send("Mật khẩu không hợp lệ");
  // tạo token
  const token = jwt.sign({ id: adminLogin.id }, process.env.SECRET_TOKEN);
  res.header("auth-token", token).status(200).json({ status: 200, token });
};

//Update admin
const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res
        .status(404)
        .json({ status: 404, message: "Admin not found", data: admin });
    }
    await admin.update(req.body);
    res.status(200).json({
      status: 200,
      message: "Update successfully",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

//delete admin
const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res
        .status(404)
        .json({ status: 404, message: "Admin not found", data: admin });
    }
    await admin.destroy();
    res.status(200).json({
      status: 200,
      message: "Admin deleted successfully",
      dataDelete: admin,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

export {
  getAdmins,
  registerAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmin,
};
